// RP Framework
import { Router,RouteParams } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpBean} from '../framework/rp-bean'; 
import {RpInputComponent} from '../framework/rp-input.component';  
    // Application Specific
@Component({
    selector: 'rp-app03',
    template: `   
    <div class="container col-md-12">
    
    <form class="form-inline"> 
    <div class="row">
    <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-12">   
    <button class="btn btn-default" (click)="goPost()" > Post </button>
    <button class="btn btn-primary" (click)="goGet()" > Get </button> 
    <button class="btn btn-success" (click)="send()" > Send Message </button>
    <button class="btn btn-warning" (click)="gotologin()" > Router: Sign Out </button> 
    <button class="btn btn-info" > Info </button> 
    <button class="btn btn-link" > Link </button> 
    <button class="btn btn-danger" > Danger </button> 
    </div> 
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-md-4"> 
        <rp-input rpId="id1" rpLabelStyle="width:100px;" rpType="text" rpLabel="Name" [(rpModel)]="_localdata" (rpTest)="onetwothree()"></rp-input> 
      </div>
      <div class="col-md-4">
        <rp-input rpId="id2" rpLabelStyle="width:100px;" rpType="gender" rpLabel="Gender" [(rpModel)]="_gender"></rp-input> 
      </div>
    </div>    
    </form>
    {{_result}}{{_para1}}
    
    </div>
    `,
  directives: [RpInputComponent],
  providers: [RpHttpService]
})
export class App03Component {  
  // RP Framework
  subscription:Subscription;     
  // Application Specific
  
  _para1 : string;  
  _localdata: string="";
  _gender: string="m";
  _result: string; 
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe( x => {})
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific
    this._para1 = params.get("p1");    
  } 
  // Application Specific
  send() {this.ics.sendBean(new RpBean()); }
  gotologin() { this._router.navigate(['Login']);  } 
  onetwothree() { console.log("onetwothree 123");}
  goGet() {      
    this.http.doGet('json/lov3.json').subscribe(
      data => this._result = JSON.stringify(data),
      error => alert(error),
      () => {}
    );
  } 
  goPost() {        
    let url:string =this.ics._apiurl + 'service001/method002';
    let json:any  = {"n1":"9234.11","syskey":"765","t1":this._localdata,"t2":this._gender,"t3":"333"};
    this.http.doPost(url,json).subscribe(
      data => { this._result = JSON.stringify(data); },
      error => alert(error),
      () => {}
    );
  }
  ngOnDestroy(){ 
    this.subscription.unsubscribe();
  } 
}