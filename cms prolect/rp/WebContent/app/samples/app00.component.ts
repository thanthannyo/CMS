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
    selector: 'my-app00',
    template: ` 
  <div class="container col-md-12">
  <button class="btn btn-primary"  data-toggle="modal" data-target="#myModal1">Popup Small</button>
  <button class="btn btn-primary"   (click)="localpopup()" >RP Report</button>
  <button class="btn btn-primary"   (click)="rootpopup()" >RP Report*</button>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#tab1">Tab 1</a></li>
      <li><a data-toggle="tab" href="#tab2">Tab 2</a></li>
      <li><a data-toggle="tab" href="#tab3">Tab 3</a></li> 
    </ul>

    <div class="tab-content">
      <div id="tab1" class="tab-pane fade in active">
        <h3>Tab 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div id="tab2" class="tab-pane fade">
        <h3>Tab 2</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div id="tab3" class="tab-pane fade">
        <h3>Tab 3</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div> 
    </div>
  </div>

<!-- Modal -->
<div id="myModal1" class="modal fade" role="dialog">
  <div class="modal-dialog modal-sm"> 
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<div id="jpopup" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">  
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">RP Report</h4>
      </div>
      <div id="jbody" class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService]
}) 

export class App00Component  implements CanDeactivate {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
  } 
  localpopup(){
    jQuery("#jbody").load('http://www.mit.com.mm');
    jQuery("#jpopup").modal();
  }
  rootpopup(){
    let bean = new RpBean;
    bean.t1="rp-popup"
    bean.t2="RP Framework - Angular-Jasper Reporting ";
    bean.t3= this.ics._rpturl + "direct.jsp";
    this.ics.sendBean(bean);
  }
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true; //return confirm('Are you sure you want to leave?');
  }
}
