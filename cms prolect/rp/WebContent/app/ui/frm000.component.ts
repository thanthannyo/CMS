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
import {Lookup001} from './lookup-001.component'; 

@Component({
    selector: 'frm000',
    template: `     
    
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal">
      <fieldset>  
      <legend>Form 000</legend>
      
      <div class="form-group"> 
      <div class="col-md-12">
      <button class="btn btn-success" type="button"  (click)="alt('Primary')" >Primary</button>
      <button class="btn btn-success" type="button"  (click)="alt('Success')" >Success</button> 
      <button class="btn btn-Danger" type="button"  (click)="alt('Danger')" >Danger</button>
      <button class="btn btn-Info" type="button"  (click)="debug()" >Info</button>    
      <button class="btn btn-Link" type="button"  (click)="alt('Link')" >Link</button>    
      </div>
      </div>
      
      <div class="form-group">
      <rp-input rpId="id1" rpType="text" rpLabel="Customer ID" [(rpModel)]="_obj.t1"></rp-input> 
      <rp-input rpId="id2" rpType="text" rpLabel="Name" [(rpModel)]="_obj.t2" rpReadonly="true"></rp-input> 
      </div>
      <div class="form-group">
      <rp-input rpId="id3" rpLabelClass="col-md-2" rpClass="col-md-5" rpType="text" rpLabel="Address" [(rpModel)]="_obj.t3a"  rpAutoComplete="on"></rp-input> 
      <rp-input rpId="id4" rpLabelClass="col-md-1" rpClass="col-md-4" rpType="gender" rpLabel="Gender*" [(rpModel)]="_obj.t3" rpReadonly="true"></rp-input> 
      </div>
      <div class="form-group">
      <rp-input rpId="id5" rpLabelClass="col-md-2" rpClass="col-md-5" rpType="ref006" rpLabel="City" [(rpModel)]="_obj.t4"></rp-input> 
      <rp-input rpId="id6" rpLabelClass="col-md-1" rpClass="col-md-4" rpType="ref007" rpLabel="Cur" [(rpModel)]="_obj.t5" ></rp-input> 
      </div>
      <div class="form-group">
          <lookup-001 rpLabel="Customer" rpClass="col-md-6" [(rpModel)]="_obj.t6" (rpChanged)="changed($event)"></lookup-001>
      </div>
      <div class="form-group">
      <rp-input rpId="id5" rpLabelClass="col-md-2" rpClass="col-md-6" rpType="text" rpLabel="Address" [(rpModel)]="_obj.t7"></rp-input> 
      </div> 
      <div class="form-group">
      <rp-input rpId="id5" rpLabelClass="col-md-2" rpClass="col-md-6" rpType="date" rpLabel="DOB" [(rpModel)]="_obj.t8"></rp-input> 
      </div> 
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#tab1">General</a></li>
      <li><a data-toggle="tab" href="#tab2">Others</a></li> 
    </ul>
    <div class="form-group"></div>
    <div class="tab-content">
      <div id="tab1" class="tab-pane fade in active">
          <div class="form-group"> 
          <rp-input rpId="id5"  rpType="text" rpLabel="Field 1*" [(rpModel)]="_obj.t1"></rp-input> 
          <rp-input rpId="id6"  rpType="text" rpLabel="Field 2" [(rpModel)]="_obj.t2"></rp-input>  
          </div>
          <div class="form-group"> 
          <rp-input rpId="id7"  rpClass="col-md-10" rpType="text" rpLabel="Field 3" [(rpModel)]="_obj.t3"></rp-input> 
          </div> 
      </div>
      <div id="tab2" class="tab-pane fade">  
        <p>This quick brown fox jumps over the lazy dog.</p> 
      </div> 
    </div>
    
          <div class="form-group">
      <label class="col-md-2 control-label"></label>
      <div class="col-md-9"> 
      <button  type="button" class="btn btn-default"   (click)="rpt1()" >Rpt 1</button>
      <button  type="button" class="btn btn-default"   (click)="rpt2()" >Rpt 2</button>
      <button  type="button" class="btn btn-default"   (click)="msg()" >Message</button>
      </div>
      </div>
  
    </fieldset>
    </form> 
    </div>
    </div>
    </div>
    
   ` ,
  directives: [RpInputComponent,Lookup001],
  providers: [RpHttpService]
}) 

export class Frm000Component  implements CanDeactivate {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  _obj={t1:"00-9-81",t2:"Dr TTT",t3a:"",t3:"f",t4:"YGN",t5:"USD",t6:"002",t7:"",t8:"2016-05-23"};
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
  } 
  rpt1(){   
    let bean = new RpBean; 
    this.ics.sendBean({"t1":"rp-popup","t2":"RP Report","t3":this.ics._rpturl + "direct.jsp"});
  }
  rpt2(){    
    this.ics.sendBean({"t1":"rp-msg",t2:"RP Report",t3:"Please wait ..."});
    this.http.doGet(this.ics._rpturl + 'prepare.jsp?reportid=r007').subscribe(
      data => {   
        let url = this.ics._rpturl + "recall.jsp?sid=" + data.sid;
        console.log(url);
        this.ics.sendBean({"t1":"rp-popup","t2":"RP Report*","t3": url }); 
    },
      error =>{  
        this.ics.sendBean({"t1":"rp-msg",t2:"Server Error",t3:error});
      },
      () => {}
    ); 
  } 
  msg(){    
    this.ics.sendBean({"t1":"rp-msg",t2:"Warning",t3:"Posting Data"});
  }
  alt(p:string){
    alert(p);
  }
  debug(){
    this.ics.sendBean({"t1":"rp-msg",t2:"Debug",t3:JSON.stringify(this._obj)});
  }
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  }
  changed(p){
    this._obj.t7=p;
  }
}
