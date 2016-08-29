// RP Framework
import { Router,RouteParams } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service';  
import {RpReferences} from '../framework/rp-references';  
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean';  
import {RpInputComponent} from '../framework/rp-input.component';
// Application Specific

@Component({
    selector: 'my-app02',
    template: `   
    <div class="container col-md-12">        
    <form class="form-inline" (ngSubmit)="goStringify()"> 
        <div class="row">    
        <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">   
        <button class="btn btn-primary" type="submit"> Submit </button>  
        <button class="btn btn-primary"   type="submit"> Stringify </button>  
        <button class="btn btn-primary" (click)="goGet()" > Get </button> 
        <button class="btn btn-primary" (click)="goPost()" > Post </button>
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
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">    
          <span *ngFor="#item of _obj.udf;#i=index;" class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6" >            


    <div class="form-group">
    <label  style="width:100px;">{{_obj.udf[i].label}}</label>
    <input *ngIf="_obj.udf[i].required=='true'&&(_obj.udf[i].type=='text'||_obj.udf[i].type=='date'||_obj.udf[i].type=='date'||_obj.udf[i].type=='email'||_obj.udf[i].type=='number'||_obj.udf[i].type=='tel'||_obj.udf[i].type=='url')"  class="form-control" type="{{_obj.udf[i].type}}" [(ngModel)]="_obj.udf[i].value"  required >
    <input *ngIf="_obj.udf[i].required!='true'&&(_obj.udf[i].type=='text'||_obj.udf[i].type=='date'||_obj.udf[i].type=='email'||_obj.udf[i].type=='number'||_obj.udf[i].type=='tel'||_obj.udf[i].type=='url')"  class="form-control" type="{{_obj.udf[i].type}}" [(ngModel)]="_obj.udf[i].value"  >
    <input *ngIf="_obj.udf[i].type=='boolean'||_obj.udf[i].type=='checkbox'"  class="form-control" type="checkbox" [ngModel]="_obj.udf[i].value" (ngModelChange)="updateData($event)"  >
    <select  *ngIf="_obj.udf[i].type=='gender'"  [(ngModel)]="_obj.udf[i].value"  class="form-control">
        <option *ngFor="#item of ref._lov1.gender" value="{{item.value}}" >{{item.caption}}</option>
    </select> 
    <select  *ngIf="_obj.udf[i].type=='ref001'"  [(ngModel)]="_obj.udf[i].value"  class="form-control">
        <option *ngFor="#item of ref._lov3.ref001" value="{{item.value}}" >{{item.caption}}</option>
    </select>     
    </div>


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

export class App02Component {  
  // RP Framework 
  subscription1:Subscription; 
  subscription2:Subscription; 
  // Application Specific
  _output1="";
  _obj ={
  "syskey":"001",
  "t1":"",
  "t2":"", 
  "udf":  
  [{"label":"Email","type":"email","value":"abc@efg.com"},{"label":"UDF 2","type":"gender","value":"f"},{"label":"UDF 3","type":"ref001","value":"3"},
  {"label":"UDF 4","type":"checkbox","value":true},{"label":"UDF 5","type":"text","value":"?"},{"label":"UDF 6","type":"text","value":"?"},
  {"label":"UDF 7","type":"text","value":"?"},{"label":"UDF 8","type":"text","value":"?"},{"label":"UDF 9","type":"gender","value":"m"}
   ]
  }
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService, private ref: RpReferences) { 
    // RP Framework
    this.subscription1 = ics.rpbean$.subscribe(   x => { })
    this._output1= JSON.stringify(this.ics._profile); 
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
