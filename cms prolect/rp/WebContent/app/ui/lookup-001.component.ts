// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {Component, Input,Output,EventEmitter} from 'angular2/core'; 
import {RpIntercomService} from '../framework/rp-intercom.service';  
declare var jQuery: any; 

@Component({
    selector: 'lookup-001',
    template:`  
    <label class="{{rpLabelClass}} control-label" for="rpId" >{{rpLabel}}</label>
    
    <div class="{{rpClass}}"> 
    <input [ngModel]="_caption" class="form-control" (keydown)="readonly($event)" (cut)="readonly($event)" (paste)="readonly($event)">
    </div>
    <button class="btn btn-info"  type="button"  (click)="lookup();">&equiv;</button>
     
    <div id="lu001popup" class="modal fade" role="dialog">
      <div id="lu001popupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="lu001popuptitle" class="modal-title">Customer Look Up</h4>
          </div> 
          <div id="lu001popupbody" class="modal-body"> 
        <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="#obj of _objs ">
                <td><a (click)="goto(obj.t1)">{{obj.t1}}</a></td>
                <td>{{obj.t2}}</td>
                <td>{{obj.t3}}</td>
              </tr> 
            </tbody>
          </table>  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `,
  providers: [] 
})
export class Lookup001 {
    //bindModelData >
    @Input() rpId : string;
    @Input() rpLabel : string;
    @Input() rpClass : string;
    @Input() rpLabelClass : string;
    @Input() rpLabelStyle : string; 
    @Input() rpModel: any;
    @Output() rpModelChange: any = new EventEmitter();  
    @Output() rpChanged: any = new EventEmitter(); 
    
    _caption: string;
    _objs:any;
  constructor(private ics: RpIntercomService) {
      if (this.rpId==null||this.rpId=="")   this.rpId="myid";  
      if (this.rpLabelClass==null||this.rpLabelClass=="")   this.rpLabelClass="col-md-2";  
      if (this.rpClass==null||this.rpClass=="")   this.rpClass="col-md-3";  
      

  } 
  ngAfterContentInit() { 
    this.updateCaption();
  }
  updateCaption(){ 
      if (this.rpModel=="001") {
        this._caption= "Myanmar Information Technology Pte Ltd" ;
        this.rpChanged.emit("Address 001"); 
      }else if (this.rpModel=="002") {
        this._caption="Nirvasoft Pte Ltd" ;
        this.rpChanged.emit("Address 002"); 
      }else {
        this._caption="Others";
        this.rpChanged.emit("Address Others"); 
    }
  }
  lookup(){ 
       this._objs=[
                  {"t1":"001","t2":"MIT Company","t3":"No. 1, Inya Road, Yangon"},
                  {"t1":"002","t2":"NS Company","t3":"No. 2, Kabaaye Road, Yangon"},
                  {"t1":"003","t2":"MS XYZ","t3":"No. 3, Pyay Road, Yangon"},
                  {"t1":"00-9-81","t2":"Dr ABC","t3":"No. 12, Inya Road, Yangon"},
                  {"t1":"00-9-82","t2":"EFG","t3":"No. 245, Kabaaye Road, Yangon"},
                  {"t1":"00-9-83","t2":"XYZ","t3":"No. 33413, Pyay Road, Yangon"}
                  ];
    jQuery("#lu001popup").modal();
  }
  goto(p) {      
          jQuery("#lu001popup").modal('hide');
          this.rpModel=p;
          this.updateCaption();
          this.rpModelChange.emit( this.rpModel);
  }  
  readonly(e:any){ 
    return true;
  } 
}
