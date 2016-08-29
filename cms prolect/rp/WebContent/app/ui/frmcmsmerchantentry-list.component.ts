// RP Framework
import { Router,RouteParams } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpBean} from '../framework/rp-bean'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {PipeCMSMerchantEntry} from '../ui/pipemerchantentry.component';

  
// Application Specific

@Component({
      selector: 'my-frmlovsetup-list',
      template: 
      ` <div class="container">
        <div class="row clearfix"> 
          <div class="col-md-12 col-lg-10 column col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <form class="form-horizontal">
              <fieldset>  
                <div class="form-group"> 
                    <legend>Merchant List</legend>       
                    <button class="btn btn-primary col-md-1" type="button" (click)="goNew();">New</button> 
                    <rp-input rpId="id1"  rpClass = "col-md-4" rpLabelClass = "col-md-1 control-label"  rpType="text" rpLabel="Search" [(rpModel)]="_filter1"></rp-input> 
                </div>  
                <div class="row col-md-12">&nbsp;</div> 
                  <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>MerchantID</th>
                            <th>Merchant Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="#obj of _merchantlist.data|PipeCMSMerchantEntry:_filter1">
                            <td><a (click)="goto(obj.merchantID)">{{obj.merchantID}}</a></td>
                            <td>{{obj.name}}</td>
                        </tr> 
                    </tbody>
                  </table> 
              </fieldset>
          </form> 
      </div>
    </div>
</div>
  `
    ,directives: [RpInputComponent],
  providers: [RpHttpService,],
  pipes: [PipeCMSMerchantEntry]

}) 
export class FrmMerchantEntryListComponent {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  _filter1="";
  _output1="";  
 
  _merchantlist = {"data" : [{"merchantID":"", "name":""}]};
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific
    this.ics.confirmUpload(false);
    
      
     if (params.get("cmd")!=null && params.get("cmd")=="LIST" ) {
      let json:any  = this._merchantlist;
      this.http.doGet(this.ics._apiurl + 'service001/getcmsEntryList').subscribe(
        arr => {
                json = arr;   
                if(arr != null){
                  if(arr.merchantListFormTable != null){
                    if(!(arr.merchantListFormTable instanceof Array)){
                        let m = [];
                        m[0] = arr.merchantListFormTable;
                        arr.merchantListFormTable = m;
                    }
                    this._merchantlist.data = arr.merchantListFormTable;
                  }                      
                }                          
                this._output1 = JSON.stringify(arr);     
              },
        error => alert(error),
        () => {}
      );
      
     }
  }    
  goto(p) {      
          this._router.navigate(['Cmsentry',, {cmd:"READ",p1:p}]); 
  }
   
  goNew() {      
         
          this._router.navigate(['Cmsentry',, {cmd:"NEW"}]);
  } 

    
} 
  

  
