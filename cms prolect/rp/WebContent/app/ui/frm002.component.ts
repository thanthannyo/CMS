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
    selector: 'frm002',
    template: ` 
              <div class="container">
              <div class="row clearfix">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
              <form class="form-horizontal">
              <fieldset>

              <!-- Form Name -->
              <legend>Form 002</legend>
              <!-- Select Basic -->
              <div class="form-group">
                <label class="col-md-2 control-label" for="selectbasic">Select Basic</label>
                <div class="col-md-10">
                  <select id="selectbasic" name="selectbasic" class="form-control">
                    <option value="1">Option one</option>
                    <option value="2">Option two</option>
                    <option value="3">Option three</option>
                  </select>
                </div>
              </div> 

              <!-- Text input-->
              <div class="form-group">
                <label class="col-md-2 control-label" for="textinput">Text Input</label>  
                <div class="col-md-4">
                  <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
                </div>


              <!-- Multiple Radios (inline) -->

                <label class="col-md-2 control-label" for="radios">Inline Radios</label>
                <div class="col-md-4"> 
                  <label class="radio-inline" for="radios-0">
                    <input type="radio" name="radios" id="radios-0" value="1" checked="checked">
                    Yes
                  </label> 
                  <label class="radio-inline" for="radios-1">
                    <input type="radio" name="radios" id="radios-1" value="2">
                    No
                  </label> 
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-label" for="textinput">Text Input 1</label>  
                <div class="col-md-4">
                  <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
                </div>
                <label class="col-md-2 control-label" for="textinput">Text Input 2</label>  
                <div class="col-md-4">
                  <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
                </div>
              </div>
                
                <!-- Textarea -->
              <div class="form-group">
                <label class="col-md-2 control-label" for="textarea">Text Area</label>
                <div class="col-md-10">                     
                  <textarea class="form-control" id="textarea" name="textarea">default text</textarea>
                </div>
              </div>

              <!-- Button (Double) -->
              <div class="form-group">
                <label class="col-md-2 control-label" for="button1id"></label>
                <div class="col-md-10">
                  <button  type="button" id="button1id" name="button1id" class="btn btn-success" (click)="alt('ok');">Ok</button>
                  <button  type="button" id="button2id" name="button2id" class="btn btn-danger">Cancel</button>
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

export class Frm002Component  implements CanDeactivate {  
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
  } 
  rpt1(){   
    let bean = new RpBean;
    bean.t1="rp-popup"
    bean.t2="RP Framework Popup View";
    bean.t3= this.ics._rpturl + "direct.jsp";
    this.ics.sendBean(bean);
  }
  rpt2(){    
    this.http.doGet(this.ics._rpturl + 'prepare.jsp?reportid=r007').subscribe(
      data => {
        let bean = new RpBean;
        bean.t1="rp-popup"
        bean.t2="RP Framework Popup View";
        bean.t3= this.ics._rpturl + "recall.jsp?sid=" + data.sid  ;
        this.ics.sendBean(bean); 
    },
      error => alert(error),
      () => {}
    );
    
    

  }
  alt(p:string){
    alert(p);
  }
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  }
}
