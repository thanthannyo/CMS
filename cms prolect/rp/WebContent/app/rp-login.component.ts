// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
// RP Framework
import {Component, Input, OnDestroy} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpHttpService} from './framework/rp-http.service'; 
import {RpIntercomService} from './framework/rp-intercom.service';
import {RpBean} from './framework/rp-bean';
import {RpInputComponent} from './framework/rp-input.component';  
import {RpReferences} from './framework/rp-references';  
@Component({
  selector: 'rp-login', 
  template: `   
  <div class="container">
      <div class="row"> <h1>{{ics._appname}}</h1>  </div>
      <div class="row">&nbsp;</div>
      <div class="row"> <h2 class="form-signin-heading">Sign In</h2> </div>
      <form class="form-inline" (ngSubmit)="goPost()">
        <div class="row">
        <label for="inputUserID" class="sr-only">User ID</label>
        <input type="text" id="inputUserID" class="form-control" placeholder="User ID" required autofocus [(ngModel)]=_user>
        </div>
        
        <div class="row">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required [(ngModel)]=_pw>
        </div>
        <div class="row">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" [(ngModel)]=_remember> Remember me
          </label>
        </div>
        </div>
        <div class="row">
        <button class="btn btn-md btn-primary " type="submit">Sign in</button> 
        </div>
      </form> 
        <div class="row">
        <button class="btn btn-link" (click)="anonymouse()">Anonymous</button> 
        </div>
        <p>{{_result}} </p> 
      </div>
  `, 
  directives: [RpInputComponent],
  providers: [RpHttpService]
})
export class RpLoginComponent implements OnDestroy{
  _user:string;
  _pw:string;
  _remember:boolean=true;
  _result:string; 
  subscription:Subscription;
  _rpbean :RpBean;
  constructor(private ics: RpIntercomService,private _router: Router, private http: RpHttpService, private ref:RpReferences,params: RouteParams) {  
    this.subscription = ics.rpbean$.subscribe(x => { })
    this.ics._profile.role=0;
    this.ics.sendBean(new RpBean());  
    if (params.get("type")!=null && params.get("type")=="anonymous") this.anonymouse(); 
  }     
  goPost() {   
    this.ics.sendBean({t1:"rp-wait",t2:"Signing in ..."});        
    let url:string = this.ics._apiurl + 'service001/signin';
    let profile:any  = {"userID":this._user,"password":this._pw}; 
    this.http.doPost(url,profile).subscribe(
      data => {       
                this.ics.sendBean({t1:"rp-msg-off"});  
                if (data.role>0){
                  this.authorize(data);
                } else {
                     this._result ="Invalid User ID or Password";
                }
              },
      error => {   
                 this.ics.sendBean({t1:"rp-error",t2: "HTTP Error Type "+ error.type});
              },
      () => { }
    );
  }
  authorize(data:any) {       
      this.ics._profile=data;  
      this.ics.sendBean(new RpBean());
      this._router.navigate(['MenuLovsetup']);
  }
  anonymouse() {     
    this.ics._profile.role=9;
      this.ics._profile={
      "userName":".",
      "role":9, 
      "logoText":"CMS",
      "logoLink":"MenuLovsetup", 
      "commandCenter":"true",
      "menus":[
              {"menuItem":"","caption":"SetUp",
                "menuItems":
                [{"menuItem":"MenuLovsetup","caption":"LOV SetUp"}, 
                {"menuItem":"FrmCMSSetup","caption":"CMS SetUp"},
                 {"menuItem":"Cmsentry","caption":"CMS Entry"},//
                  {"menuItem":"ImageUpload","caption":"Image Upload"}
                ]
		//Cmsentry
      }        
      ],    
    "rightMenus":[ {"menuItem":"Login","caption":"Sign In"} ]
    };;  
      this.ics.sendBean(new RpBean());
      this._router.navigate(['MenuLovsetup']); 
  }  
  ngOnDestroy(){ 
    this.subscription.unsubscribe();
  } 
}