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
    selector: 'frmsearch',
    template: ` 
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal">
      <fieldset>  
      <legend>Command Center / Search Results </legend>
      
      
      <div class="form-group"> 
      <div class="col-md-12">
      <button class="btn btn-primary"   (click)="alt('Primary')" >Primary</button>
      <button class="btn btn-success"   (click)="alt('Success')" >Success</button>    
      </div>
      </div>
      
      <div class="form-group">
      <rp-input rpId="id1" rpType="text" rpLabel="Customer ID" [(rpModel)]="_obj.t1"></rp-input> 
      <rp-input rpId="id2" rpType="text" rpLabel="Name" [(rpModel)]="_obj.t2"></rp-input> 
      </div>
      <div class="form-group">
      <rp-input rpId="id3" rpLabelClass="col-md-2" rpClass="col-md-5" rpType="text" rpLabel="Address" [(rpModel)]="_obj.t3"></rp-input> 
      <rp-input rpId="id4" rpLabelClass="col-md-1" rpClass="col-md-4" rpType="ref001" rpLabel="Sex" [(rpModel)]="_obj.t3"></rp-input> 
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
      <button class="btn btn-default"   (click)="rpt1()" >Rpt 1</button>
      <button class="btn btn-default"   (click)="rpt2()" >Rpt 2</button>
      </div>
      </div>
  
    </fieldset>
    </form> 
    </div>
    </div>
    </div>
   ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService]
}) 

export class FrmSearchComponent  implements CanDeactivate {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  _obj={"t1":"00-9-81","t2":"Dr TTT","t3":"No. 12, Inya Road, Yangon"};
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
    if (params.get("cmd")!=null ) this._obj.t1=(params.get("cmd"));
  } 
  popup(){   
    let bean = new RpBean;
    bean.t1="rp-popup"
    bean.t2="RP Framework Popup View";
    bean.t3= this.ics._rpturl + "direct.jsp";
    this.ics.sendBean(bean);
  }
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  }
}
