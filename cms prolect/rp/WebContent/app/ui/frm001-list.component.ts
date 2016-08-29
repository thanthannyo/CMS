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
import {Pipe001} from './pipe001'; 


@Component({
    selector: 'frm001-list',
    template: ` 
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal">
      <fieldset>  
      <legend>Form 000</legend>  
      <div class="form-group">  
      <div class="col-md-12">
        <button class="btn btn-primary col-md-1" type="button" (click)="goNew();">New</button> 
      </div>
      </div>
      <div class="form-group"> 
        <rp-input rpId="id1" class="col-md-6" rpType="text" rpLabel="Filter" [(rpModel)]="_filter1"></rp-input> 
      </div>
      </fieldset>
      </form> 
        
    <div class="row col-md-12">&nbsp;</div> 
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#obj of _objs | Pipe001:_filter1">
        <td><a (click)="goto(obj.t1)">{{obj.t1}}</a></td>
        <td>{{obj.t2}}</td>
        <td>{{obj.t3}}</td>
      </tr> 
    </tbody>
  </table> 
  
  

    </div>
    </div>
    </div>
   ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService],
  pipes: [Pipe001]
}) 

export class Frm001ListComponent  implements CanDeactivate {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific
  _filter1=""; 
  _output1=""; 
  _objs=[
  {"t1":"00-9-81","t2":"Mr ABC","t3":"No. 1, Inya Road, Yangon"},
  {"t1":"00-9-82","t2":"Mrs EFG","t3":"No. 2, Kabaaye Road, Yangon"},
  {"t1":"00-9-83","t2":"MS XYZ","t3":"No. 3, Pyay Road, Yangon"},
  {"t1":"00-9-81","t2":"Dr ABC","t3":"No. 12, Inya Road, Yangon"},
  {"t1":"00-9-82","t2":"EFG","t3":"No. 245, Kabaaye Road, Yangon"},
  {"t1":"00-9-83","t2":"XYZ","t3":"No. 33413, Pyay Road, Yangon"}
  ];
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService ) { 
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) console.log("goto login");  //this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
  }  
  goto(p) {      
          this._router.navigate(['Menu01',, {cmd:"READ",p1:p}]); 
  } 
  goNew() {      
          this._router.navigate(['Menu01',, {cmd:"NEW"}]); 
  } 
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  }
}
