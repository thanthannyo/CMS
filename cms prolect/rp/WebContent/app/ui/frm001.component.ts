// RP Framework
import { Router,RouteParams,CanDeactivate,ComponentInstruction } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
declare var jQuery: any; 
// Application Specific


@Component({
    selector: 'frm001',
    template: ` 
    
    
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal" (ngSubmit)="goPost()" >
      <fieldset>  
      <legend>Form 001</legend>
       
      <div class="form-group"> 
      <div class="col-md-12">
      <button class="btn btn-primary"  type="submit"  >POST</button> 
      <button class="btn btn-primary" type="button" (click)="goGet()" >GET</button> 
      <button class="btn btn-primary" type="button" (click)="goList();" >List</button> {{_note}} 
      <button class="btn btn-primary"  type="submit"  >?</button> 
      </div>
      </div>
      
      <div class="form-group">
      <rp-input rpType="text" rpLabel="Customer ID" [(rpModel)]="_obj.t1" (keydown.enter)="nopost();"></rp-input> 
      <rp-input rpType="text" rpLabel="Name" [(rpModel)]="_obj.t2"></rp-input> 
      </div>
      <div class="form-group"> 
      <rp-input rpType="text" rpLabel="Address" [(rpModel)]="_obj.t3"></rp-input>
      </div>
      
      
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#tab1">General</a></li>
      <li><a data-toggle="tab" href="#tab2">Others</a></li> 
    </ul>
    <div class="form-group"> </div>
    <div class="tab-content">
      <div id="tab1" class="tab-pane fade in active"> 
        <div class="form-group">
            <rp-input rpType="text" rpLabel="Field 1" [(rpModel)]="_obj.t1"></rp-input> 
        </div>
        <div class="form-group"> 
            <rp-input rpType="text" rpLabel="Field 2" [(rpModel)]="_obj.t2"></rp-input>   
            <rp-input rpType="text" rpLabel="Field 3" [(rpModel)]="_obj.t3"></rp-input>  
        </div>
      </div>
      <div id="tab2" class="tab-pane fade"> 
        <div class="row col-md-12">&nbsp;</div>
        <div class="row col-md-12">
        <p>This quick brown fox jumps over the lazy dog.</p>
        </div>
      </div> 
    </div>
      
    </fieldset>
    </form> 
    </div>
    </div>
        {{_output1}}
    </div>
   ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService]
}) 

export class Frm001Component  implements CanDeactivate {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific
  _postme=false;
  _note="";
  _output1="";
  _obj={"t1":"00-9-81","t2":"Dr TTT","t3":"No. 12, Inya Road, Yangon"};
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
    if (params.get("cmd")!=null && params.get("cmd")=="NEW" ) {
      this._note=" NEW";
      this._obj={"t1":"","t2":"","t3":""};
    } else if (params.get("cmd")!=null && params.get("cmd")=="READ" ) {
      let k = params.get("p1");
      this._obj={"t1":k,"t2":"","t3":""};
    }
  } 
  goGet() {      
    this.http.doGet(this.ics._apiurl + 'service001/method001').subscribe(
      data => this._output1 = JSON.stringify(data),
      error => alert(error),
      () => {}
    );
  } 
  goPost() {  
    console.log("post ok");
      this._postme=false;      
      let url:string =this.ics._apiurl + 'service001/method002';
      let json:any  = this._obj;
      this.http.doPost(url,json).subscribe(
        data => { 
          this._output1 = JSON.stringify(data); 
          this._obj=data;},
        error => alert(error),
        () => {}
      ); 
  }
  goList() {      
          this._router.navigate(['Menu01-List']); 
  } 
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  } 
  nopost() {       
          return false;
  }
}
