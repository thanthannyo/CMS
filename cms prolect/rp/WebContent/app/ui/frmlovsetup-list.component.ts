// RP Framework
import { Router,RouteParams } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpBean} from '../framework/rp-bean'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {PipeLovSetUp} from '../ui/pipelovsetup-list.component';
  
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
                    <legend>Lov SetUp List</legend>       
                    <button class="btn btn-primary col-md-1" type="button" (click)="goNew();">New</button> 
                    <rp-input rpId="id1"  rpClass = "col-md-4" rpLabelClass = "col-md-1 control-label"  rpType="text" rpLabel="Search" [(rpModel)]="_filter1"></rp-input> 
                </div>  
                <div class="row col-md-12">&nbsp;</div> 
                  <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>LOV No</th>
                            <th>LOV Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="#obj of _lovsetuplist.data | PipeLovSetUp:_filter1">
                            <td><a (click)="goto(obj.lovNo)">{{obj.lovNo}}</a></td>
                            <td>{{obj.lovDesc2}}</td>
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
  pipes: [PipeLovSetUp]
}) 
export class FrmLOVSetUpListComponent {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  _filter1="";
  _output1="";  
 
  _lovsetuplist = {"data" : [{"lovNo":"", "lovDesc2":""}]};
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific
    this.ics.confirmUpload(false);
    
      
     if (params.get("cmd")!=null && params.get("cmd")=="LIST" ) {
      
    
 let url:string =this.ics._apiurl + 'service001/lovSetUplist';
      let json:any  = this._lovsetuplist;
     
      this.http.doPost(url,json).subscribe(
        res => {
        
              this._lovsetuplist = res;
              if (!(res.data instanceof Array)) {
                    let m:Array<any> = [];  
                    m[0] = res.data;
                    this._lovsetuplist.data = m;
             }         
        },
        error => alert(error),
        () => {}
      );
      
     }
  }    
   goto(p) {      
          this._router.navigate(['MenuLovsetup',, {cmd:"READ",p1:p}]); 
  }
   
  goNew() {      
         
          this._router.navigate(['MenuLovsetup',, {cmd:"NEW"}]);
  } 

    
} 
  

  
