import { Router,RouteParams,CanDeactivate,ComponentInstruction } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
import {RpReferences} from '../framework/rp-references';
import {PipeCMSSetup} from './pipecmssetup.component'

declare var jQuery: any; 
// Application Specific

@Component({
    selector: 'cmssetup-list',
    template: ` 
   
    <div  class="container">
      <div class="col-lg-12 ">
        <form  class="form-horizontal"> 
          <fieldset>
           <div class="form-group">
              <legend>CMS Setup List</legend>
             <button class="btn btn-primary col-md-1" type="button" (click)="goNew();">New</button> 
              <div class="col-md-5">
             <div class="input-group">                        
                 <input id="textinput" name="textinput" type="text" placeholder="Search" [(ngModel)]="_searchVal"   class="form-control input-md">
                 <span class="input-group-btn input-md">
	               <button class="btn btn-primary input-md" type="button">
	               <span class="glyphicon glyphicon-search"></span>Search
	               </button>
	               </span>                
	        </div> 
          </div>        
       
          </div>                       
            <div class="form-group">               
                <table width=50% class="table table-hover table-bordered">
                    <thead>
                    <tr></tr>
                      <tr>                        
                        <th align="center">Merchant ID</th>
                        <th align="center">Merchant Name</th>                                           
                      </tr>
                    </thead>
                    <tbody>
                       <tr *ngFor="#obj of  _merchantobjlist.arr|PipeCMSSetup:_searchVal">
                       <td><a (click)="goto(obj.merchantid)">{{obj.merchantid}}</a></td>                       
                        <td>{{obj.name}}</td>                                         
                      </tr> 
                    </tbody>                     
                  </table>               
             </div>
          </fieldset>
        </form>
       </div>
    </div>  
   
   `,
  directives: [RpInputComponent],
  providers: [RpHttpService], 
  pipes: [PipeCMSSetup]
  
})  

export class AppFrmCMSSetupList {   
    subscription1:Subscription; 
    subscription2:Subscription; 
    _searchVal = "";
    _filter= "";
    _output="";    
    _merchantobj = {"merchantid":"","name":"",
           "data" : [{"srno":"1","datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":""}], "messagecode":"","messagedesc":""};            
 _merchantobjlist={"arr" : [ {"merchantid":"", "name":""}]}
   constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) {
    
      
    this.subscription1 = ics.rpbean$.subscribe(x => { })
     if (!ics.getRole() || ics.getRole() == 0) console.log("goto login");  //this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
      
       this._filter = this._searchVal.trim();
       if (params.get("cmd") != null && params.get("cmd") == "LIST") {  
       this.http.doGet(this.ics._apiurl+'service001/getCMSMerchantExtraList').subscribe(
        response => {       
          
           if(response != null){
               if(response.cmsMerchantData != null){
                 if(!(response.cmsMerchantData instanceof Array)){
                    let m = [];
                    m[0] = response.cmsMerchantData;
                    response.cmsMerchantData = m;
                 }
                 this._merchantobjlist.arr = response.cmsMerchantData;
               }
             } 
        },
        error => alert(error),
        () => { }
      );
   }
    
  } 
    
  goto(merchantid){
      this._router.navigate(['FrmCMSSetup',, {cmd:"READ",p1:merchantid}]);        
  }  
    
  goNew(){
      this._router.navigate(['FrmCMSSetup',, ]); 
  }
    
}
