// RP Framework
import {Component, Input, OnDestroy} from 'angular2/core';
import { Router,RouteParams } from 'angular2/router'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean';   
// Application Specific

@Component({
    selector: 'my-app01',
    template: `  
    <div class="container col-md-12">         
    <form class="form-inline" (ngSubmit)="goStringify()"> 
        <div class="row">    
        <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">   
        <button  type="button" class="btn btn-primary" type="submit"> Submit </button>  
        <button  type="button" class="btn btn-primary"   type="submit"> Stringify </button>  
        <button  type="button" class="btn btn-primary" (click)="goGet()" > Get </button> 
        <button  type="button" class="btn btn-primary" (click)="goPost()" > Post </button>
        </div> 
        </div> 
        <div class="row">&nbsp;</div>
        <div class="row">    
        <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <rp-input rpLabelStyle="width:50px;" rpType="text" rpLabel="Name" [(rpModel)]="_obj.t1"></rp-input> 
        </div> 
        <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <rp-input rpLabelStyle="width:75px;" rpType="text" rpLabel="Address" [(rpModel)]="_obj.t2"></rp-input> 
        </div>  
        </div> 
        <div class="row">&nbsp;</div>__________________________________________________________________________
        <div class="row">&nbsp;</div>
        <div class="row">    
          <span *ngFor="#item of _obj.udf;#i=index;" class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6" >            
          <rp-input rpLabelStyle="width:100px;" rpType="{{_obj.udf[i].type}}" rpLabel="{{_obj.udf[i].label}}" [(rpModel)]="_obj.udf[i].value" rpRequired="{{_obj.udf[i].required}}"></rp-input> 
          <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12" *ngIf="(i+1) % 2==0">&nbsp;</div>    
          </span>  
        </div>
     </form>
     
     <br/><br/>
     {{_output1}}
     <br/><br/>
     <ul>  <li  *ngFor="#item of _obj.udf">{{item.value}}</li>   </ul>
     </div>
    ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService]
}) 

export class App01Component {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific
  _output1="";
  _obj ={
  "syskey":"001",
  "t1":"",
  "t2":"",
  "udf":  
  [{"label":"Email","type":"email","value":"asdf@asd.com"},{"label":"UDF 2","type":"gender","value":"f"},{"label":"UDF 3","type":"ref001","value":"g"},
  {"label":"Married","type":"checkbox","value":true},{"label":"UDF 5","type":"text","value":"?"},{"label":"UDF 6","type":"text","value":"?"},
  {"label":"UDF 7","type":"date","value":"?"},{"label":"UDF 8","type":"text","value":"?"},{"label":"UDF 9","type":"gender","value":"m"}
   ]
  }
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific     
  } 

  goStringify() {     
      this._output1 = JSON.stringify(this._obj); 
  } 
  goGet() {     
    console.log("GET Method");  
    let url:string =this.ics._apiurl + 'service001/gete001';
    this.http.doGet(url).subscribe(
      data => {
        console.log("get replied");
        this._obj=data;
        this._output1 = JSON.stringify(this._obj);
      },
      error => alert(error),
      () => {}
    );
  }
    goPost() {      
    console.log("POST Method");      
    let url:string =this.ics._apiurl + 'service001/poste001'; 
    this.http.doPost(url,this._obj).subscribe(
      data => {  
        console.log("get replied");
        this._obj=data;
        this._output1 = JSON.stringify(data); 
      },
      error => alert(error),
      () => {}
    );
  }  
}
