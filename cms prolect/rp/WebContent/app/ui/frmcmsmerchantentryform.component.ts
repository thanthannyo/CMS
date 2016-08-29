// RP Framework
import { Router,RouteParams,CanDeactivate,ComponentInstruction } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
import {RpReferences} from '../framework/rp-references'; 
import {ClientUtil} from '../util/rp-client.util'; 
//import {LookupMerchantEntry} from './lookup-merchantentry.compontent';


declare var jQuery: any; 
declare var geoloc: any;

// Application Specific


@Component({
    selector: 'frmentry',
    template: `
    
    <div class="container" >
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal"  >
      <fieldset>  
      <legend>{{_title}}</legend>               
      <div class="form-group"> 
        <div class="col-md-12">     
           <button class="btn btn-primary" type="button" (click)="goNew();">New</button> 
           <button class="btn btn-md btn-primary" type="submit" id="myBtnSave" (click)="goSave();">Save</button>  
           <button class="btn btn-success" type="button" (click)="goList();" >List</button>
                     
        </div>     
      </div> 
        
      <div class="form-group">
          <rp-input  rpClass = "col-md-3" rpLabelClass = "col-md-3 control-label" rpType="text" rpLabel="Merchant ID" [(rpModel)]="_all.merchantID"></rp-input>
          <button class="btn btn-info" (click)="lookup();" >&equiv;</button>
      </div>
      <div class="form-group">
          <rp-input rpClass = "col-md-3" rpLabelClass = "col-md-3 control-label" rpType="text" rpLabel = "Name"   [(rpModel)]="_all.name"></rp-input>                
      </div>  
      <div class="form-group" >
	        	<span *ngFor="#item of _all.fieldData;#i=index;" >             
                                               
                 <rp-input rpId={{_all.fieldData[i].fieldCode}} rpClass = "col-md-3" rpLabelClass = "col-md-1 control-label" rpLabel={{_all.fieldData[i].fieldLabel}} rpType="{{_all.fieldData[i].datatype}}" rpLabel=" " [(rpModel)]="_all.fieldData[i].fieldValue"></rp-input>
            
            <div *ngIf="_all.fieldData[i].datatype=='reflov'">
              <select [(ngModel)]="_all.fieldData[i].fieldValue"  class="col-md-3">
                <option *ngFor="#item2 of item.lovData" value="{{item2.lovCde}}" >{{item2.lovDesc1}}</option>
              </select> 
          </div>
			   <div class="form-group"  >&nbsp;</div> 
		    </span>
		</div>
      
       </fieldset>
       </form> 
       </div>
       </div>
    </div> 
    
     <div id="lu001popup" class="modal fade" role="dialog">
      <div id="lu001popupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="lu001popuptitle" class="modal-title">Merchant</h4>
          </div> 
          <div id="lu001popupbody" class="modal-body"> 
           <table class="table table-striped">
             <thead>
              <tr>
                <th>Merchant ID</th>
                <th>Name</th>               
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="#obj of _list.arr ">
                <td><a (click)="goto(obj.merchantID)">{{obj.merchantID}}</a></td>
                <td>{{obj.name}}</td>               
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
   ` ,
  directives: [RpInputComponent],
  providers: [RpHttpService]
}) 


export class FrmCMSMerchantEntryFormComponent    {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific
  _datatype="reflov";
  // isOn: "false";
  _note="";     
  _type = ""; 
  _isDisabled = true ;
  _output1 = ""; 
   
  _list = {"arr" : [{"merchantID":"","name":""}]};
  _all = { "merchantID":"","name":"","messageCode":"","messageDesc":"",
           "fieldData":[{"fieldCode":"","fieldLabel":"","fieldRef":"","restType":"","datatype":"","fieldValue":"","lovData":[{"srno":"1","lovCde":"","lovDesc1":""}]}]};  
           
   _all1 = { "merchantID":"","name":"",
           "fieldData":[{"fieldCode":"","fieldLabel":"","fieldRef":"","restType":"","datatype":"","fieldValue":"","lovData":[{"srno":"1","lovCde":"","lovDesc1":""}]}]};           
        
   _status = "0"; 
   
  _util:ClientUtil = new ClientUtil();
      
  selectedOptions : any;
  _title = "CMS Entry Form";
  _var : any ;
  _isFromList = "false";
  _IsAndroid = "";
  _classname = "";
  _message = "";
  _timer = 0;
  
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService, private ref: RpReferences) { 
    // RP Framework
    
    this.subscription = ics.rpbean$.subscribe(   x => { })
    this.ics._profile.role=100;
    
    
    // if  (!ics.getRole() || ics.getRole()==0 )     
    //   this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
    this._all = { "merchantID":"","name":"","messageCode":"","messageDesc":"",
           "fieldData":[{"fieldCode":"","fieldLabel":"","fieldRef":"","restType":"","datatype":"","fieldValue":"","lovData":[{"srno":"1","lovCde":"","lovDesc1":""}]}]}; 
          
    if (params.get("cmd")!=null && params.get("cmd")=="NEW" ) {
  
    } else if (params.get("cmd")!=null && params.get("cmd")=="READ" ) {
      this._isFromList = "true";      
      let k = params.get("p1");
      console.log("Merchatn Id from list : " + k  );            
      this._all = { "merchantID":k,"name":"","messageCode":"","messageDesc":"",
           "fieldData":[{"fieldCode":"","fieldLabel":"","fieldRef":"","restType":"","datatype":"","fieldValue":"","lovData":[{"srno":"1","lovCde":"","lovDesc1":""}]}]};       
      this._title = "CMS Entry Form"; 
      this.getCMSEntryByID(k);           
    }   
        
      
  } 
 
    goSave() { 
           
    let url:string =this.ics._apiurl + 'service001/saveMerchant';
    let json:any  = this._all;
    console.log("SAVE="+JSON.stringify(this._all));
    this.http.doPost(url,json).subscribe(
      data => { 
        this._output1 = JSON.stringify(data); 
        if(data != null){
           this._all=data;
           if(this._all.messageCode=="0000"){
             this._classname = "alert alert-success";
             this._timer = 2000;
           }else if(this._all.messageCode=="0024"){
              this._classname = "alert alert-danger";
             this._timer = 5000;
           }
           this.goNew();
           this.alertMessage(this._all.messageDesc,this._classname,this._timer);
        } 
       // jQuery("#myBtnSubmit").prop("disabled",false);
       // jQuery("#myBtnPrint").prop("disabled",false);
        
    },
      error => alert(error),
      () => { }
      
    );
  }
  lookup(){ 
        let json:any  = this._list;
        this.http.doGet(this.ics._apiurl + 'service001/getmerchantIDList').subscribe(
          data => {  
                   
             this. _list.arr =   data.merchantListFormTable;
             if(data != null){
               if(data.merchantListFormTable != null){
                 if(!(data.merchantListFormTable instanceof Array)){
                    let m = [];
                    m[0] = data.merchantListFormTable;
                    data.merchantListFormTable = m;
                 }
                 this._list.arr = data.merchantListFormTable;
               }
             }
          },
              error => alert(error),
              () => {}        
        );
        
    jQuery("#lu001popup").modal();
  }
  goto(p){
      this.http.doGet(this.ics._apiurl + 'service001/getMerchantEntryByID?merchantID=' + p).subscribe(
        data =>{
             
         jQuery("#lu001popup").modal('hide');
         this._all= data; 
         console.log (JSON.stringify(this._all));    
         this._all1 = data;
         
         //load lov
         //this.ref._lov3.ref020 = this._all.fieldData.
        },
        error => alert(error),
        () => { }
      );
  }
  
  goList() { 
      this._router.navigate(['CmsmerchantList', {cmd:"LIST"}]); 
  }
  
  goNew(){ 
   
      this.ics.sendBean({"t1":"rp-alert-success"})
      this._all = { "merchantID":"","name":"","messageCode":"","messageDesc":"",
           "fieldData":[{"fieldCode":"","fieldLabel":"","fieldRef":"","restType":"","datatype":"","fieldValue":"","lovData":[{"srno":"1","lovCde":"","lovDesc1":""}]}]};
             
  }
  
  getCMSEntryByID(id){
    this.http.doGet(this.ics._apiurl + 'service001/getCMSEntryByID?merchantID=' + id).subscribe(
        data =>{
         this._all= data;      
         console.log(this._all);
        },
        error => alert(error),
        () => { }
      );
  }
  alertMessage(message, classname, timer){
    this.ics.sendBean({"t1":"rp-alert","t2":message,"t3":classname, "n1":timer});
  }
  
}
