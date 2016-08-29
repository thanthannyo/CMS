// RP Framework
import {Router,RouteParams,CanDeactivate,ComponentInstruction, } from 'angular2/router'; 
import {Component, Input,Output, OnDestroy,ElementRef,EventEmitter} from 'angular2/core';
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
import {RpReferences} from '../framework/rp-references'; 
import {ClientUtil} from '../util/rp-client.util';

declare var jQuery: any; 
// Application Specifi

@Component({
    selector: 'app-cmssetup',
    template: ` 
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal" (ngSubmit)="goPost()" >
      <fieldset>  
      <legend>CMS Setup</legend>
       
      <div class="form-group"> 
      <div class="col-md-12">
      <button class="btn btn-primary" type="button" (click)="goNew()" >New</button>
      <button class="btn btn-primary" type="button" (click)="goSave()" >Save</button>      
      <button class="btn btn-success" type="button" (click)="goList();" >List</button>    
      </div>
      </div>     
      <div class="form-group"> 
       <rp-input [(rpModel)]="_header.merchantid"  rpClass = "col-md-3" rpLabelClass = "col-md-3 control-label" rpType="text" rpLabel="Merchant ID"  rpReadonly = "true"></rp-input>
      <!-- <button class="btn btn-info" (click)="lookup(obj);" >&equiv;</button>-->
       <button class="btn btn-info" (click)="lookup();" >&equiv;</button>
      </div>
      <div class="form-group">
         <rp-input [(rpModel)]="_header.name"  rpClass = "col-md-3" rpLabelClass = "col-md-3 control-label" rpType="text" rpLabel="Merchant Name"  rpReadonly = "true"></rp-input>
      </div>
     
       <hr/>  
       <div class="form-group">
          <div class="col-md-12">
            <button class="btn btn-Info" type="button" (click)="goAdd()">Add</button>
          </div>
       </div>                 
         <div class="form-group">
          <div class="col-md-12">
          <form>
            <table class="table table-striped" id="myTable">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Data Type</th>
                    <th>Field Code</th>
                    <th>Field Description </th>                   
                    <th>Field Ref</th>
                  </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#obj of _merchantobj.data">
                    <td class = "col-md-1">{{obj.srno}}</td>
                    <td class = "col-md-2">
                        <rp-input rpType="ref021" rpClass = "col-md-0" [(rpModel)]="obj.datatype" (change)="callFieldCode($event.target.options,obj)"></rp-input>                     
                    </td>
                    <td class = "col-md-2">
                         <rp-input rpType={{obj.refcode}} [(rpModel)]="obj.fieldcode" rpClass = "col-md-0" (change)="changeEventFieldCode($event.target.options,obj)"></rp-input>
                    </td>     
                     
                    <td class = "col-md-2">
                        <rp-input [(rpModel)]="obj.fielddesc" rpRequired =true rpType="text" rpLabelClass = "col-md-0" rpClass = "col-md-0" rpReadonly = {{obj.readonly}}></rp-input>
                    </td> 
           
                    <td class = "col-md-2">
                         <rp-input rpType={{obj.lovref}} rpClass = "col-md-0" (change)="changeEvent($event.target.options,obj)" [(rpModel)]="obj.fieldref"></rp-input>
                    </td>                                     
                    <td>
                     <button class="btn btn-Danger" type="button" (click)="goRemove(obj)">X</button>
                    </td>
                    <td></td>
                  </tr> 
                </tbody>
              </table>
             </form>
            </div>
         </div>                      
      </fieldset>
      </form> 
      </div>      
       
    <div id="lu001popup" class="modal fade" role="dialog">
      <div id="lu001popupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="lu001popuptitle" class="modal-title">CMS Merchant Information</h4>
          </div> 
          <div id="lu001popupbody" class="modal-body"> 
           <table class="table table-striped">
             <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>               
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="#obj of _list.arr ">
                <td><a (click)="goto(obj.merchantid)">{{obj.merchantid}}</a></td>
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

export class AppFrmCMSSetup  implements CanDeactivate {
  // RP Framework 
 
  // Application Specific 
  _timer = 0;
  _note="";
 
  
 _merchantobj = {"merchantid":"","name":"",
           "data" : [{"srno":"1","datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":"","readonly":"false"}], "messagecode":"","messagedesc":""};            
 
 _lovobj={"lovNo":"","sysKey":"","createdDate":"","modiDate":"","userID":"","recStatus":"","lovDesc2":"","messagecode":"","messagedesc":"",
          "data":[{"lov":"","lovCde":"","lovDesc1":""}]
        }
 _list = {"arr" : [ {"merchantid":"", "name":""}]};
 
 _header={"merchantid":"", "name":""};

   constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService, private ref: RpReferences,private element: ElementRef ) { 
    // RP Framework
    //this._all.openingdate = this._util.getTodayDate();    
    this.getLoadLOV();   
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specific 
    this.ics.confirmUpload(false);
    
     if (params.get("cmd")!=null && params.get("cmd")=="NEW" ) {      
  
    } else if (params.get("cmd")!=null && params.get("cmd")=="READ" ) {
      let k = params.get("p1"); 
     this.getCMSMerchantExtraCaptionByID(k);     
    }
    
  } 
  
  goShow(){    
    this.ics.sendBean({"t1":"rp-alert-success","t2":"Saved Successfully."});
  }
  
  changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = e=> {
            var contents: any = e.target;
            image.src = contents.result;
        };
        reader.readAsDataURL(event.target.files[0]);
  }
    
  goNew(){ 
   
    this._merchantobj = {"merchantid":"","name":"",
           "data" : [{"srno":"1","datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":"","readonly":""}], "messagecode":"","messagedesc":""};            
 
    this._lovobj={"lovNo":"","sysKey":"","createdDate":"","modiDate":"","userID":"","recStatus":"","lovDesc2":"","messagecode":"","messagedesc":"",
          "data":[{"lov":"","lovCde":"","lovDesc1":""}]};
   this._header={"merchantid":"", "name":""};
           
  } 
  
  goList() { 
       this._router.navigate(['FrmCMSSetupList',, {cmd:"LIST"}]); 
  } 
  
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;  
  }
  
  alertMessage(message){
    this.ics.sendBean({"t1":"rp-msg",t2:"Information",t3:message});   
  } 
  
  goSave(){
     let url:string =this.ics._apiurl + 'service001/SaveCMSMerchantExtraSetup';     
     this._merchantobj.merchantid = this._header.merchantid;
     this._merchantobj.name= this._header.name;
     let json:any  = this._merchantobj;
     
     this.http.doPost(url,json).subscribe(
     data => { 
       this._merchantobj= data       
        if(this._merchantobj.messagecode == "0000"){                                       
            this.alertMessage(this._merchantobj.messagedesc);     
        }
        else{                              
              this.alertMessage(this._merchantobj.messagedesc);    
        }    
        
       this. _merchantobj = {"merchantid":"","name":"",
           "data" : [{"srno":"1","datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":"","readonly":""}], "messagecode":"","messagedesc":""};    
       this._header={"merchantid":"", "name":""};
     },
        error => alert(error),
        () => { }     
    );

  }  

  
  
  getCMSMerchantExtraCaptionByID(merchantid){
    
     let url:string =this.ics._apiurl + 'service001/getCMSMerchantExtrBymerchantID';
    // this._all.accno = accno;
    this._merchantobj.merchantid = merchantid;
     let json:any  = this._merchantobj;
     this.http.doPost(url,json).subscribe(
     data => {      
        if(data != null)   {  
           this._merchantobj=data;
           this._header.merchantid = this._merchantobj.merchantid;
           this._header.name=  this._merchantobj.name;           
           if(!(data.data instanceof Array)){                     
              let m = [{"srno":"1","datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":""}];
              m[0] = data.data;
              //this._all.data =m;           
           }                
        }
            
     },
        error => alert(error),
        () => { }     
    );   
  }
  
goAdd(){    
    if(this._merchantobj.data[0].srno==""){
      this._merchantobj.data[0].srno="1";
    }
    let maxsrno = this._merchantobj.data.length;
    maxsrno = maxsrno + 1;
    
    this._merchantobj.data.push({srno:(maxsrno).toString(), "datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":"","readonly":""});
  }
  
  callback(k){
     this._merchantobj.data.splice(k,1);
  }
 
  goRemove(p){
    let index = this._merchantobj.data.indexOf(p);
    let length = this._merchantobj.data.length;    
    if(length<2){
      this._merchantobj.data[0]={srno:("").toString(),  "datatype":"01","fieldcode":"01","fielddesc":"","fieldref":"","refcode":"ref022","lovref":"","readonly":""};
    } else {
      this._merchantobj.data.splice(index,1);
    }
    for (var i = 0; i < length; i++) {
     let maxsrno = i;
     maxsrno = maxsrno + 1;
     this._merchantobj.data[i].srno =  (maxsrno).toString();
    }
  } 
  
   lookup(){      
     if(this.ics._apiurl != ""){
         this.http.doGet(this.ics._apiurl+'service001/getCMSMerchantList').subscribe(
          data => {             
             this. _list.arr =   data.cmsMerchantData;
             if(data != null){
               if(data.cmsMerchantData != null){
                 if(!(data.cmsMerchantData instanceof Array)){
                    let m = [];
                    m[0] = data.cmsMerchantData;
                    data.cmsMerchantData = m;
                 }
                 this._list.arr = data.cmsMerchantData;
               }
             }
          },
              error => alert(error),
              () => {}        
        );
      }
    jQuery("#lu001popup").modal();
  }
  
  goto(p){
      this.http.doGet(this.ics._apiurl + 'service001/getCMSMerchantByID?cmsMerchantID=' + p).subscribe(
        data =>{
         this._header= data;         
         jQuery("#lu001popup").modal('hide');
 
        },
        error => alert(error),
        () => { }
      );
  }
  
   callFieldCode(options, indexvalue)
  {  
    let indexresult =indexvalue.srno-1;
    let value =options[options.selectedIndex].value;    
      if(value == "01"){
        //text 
          
          this._merchantobj.data[indexresult].readonly ="false";
          this._merchantobj.data[indexresult].refcode ="ref022"; 
          this._merchantobj.data[indexresult].lovref ="";
      } 
      
      else if(value == "02"){
          //number
         
          this._merchantobj.data[indexresult].readonly ="false";
          this._merchantobj.data[indexresult].refcode ="ref023"; 
          this._merchantobj.data[indexresult].lovref ="";
      }
      
       else if(value == "03"){
         //date
         
         this._merchantobj.data[indexresult].readonly ="false"; 
         this._merchantobj.data[indexresult].refcode ="ref024";             
         this._merchantobj.data[indexresult].lovref ="";         
      }
      
      else if(value == "04"){
          //lov
      
         this._merchantobj.data[indexresult].readonly ="true";         
         this._merchantobj.data[indexresult].refcode ="ref025";           
         this._merchantobj.data[indexresult].lovref ="ref028";//lov
      }
      
      else if(value == "05"){
          //bool
         
          this._merchantobj.data[indexresult].readonly ="false";
          this._merchantobj.data[indexresult].refcode ="ref026"; 
          this._merchantobj.data[indexresult].lovref ="";  
      }
      
      else if(value == "06"){
         //image
         
          this._merchantobj.data[indexresult].readonly ="false";        
          this._merchantobj.data[indexresult].refcode ="ref027";
          this._merchantobj.data[indexresult].lovref ="";          
      }     
  }
  
  getLoadLOV(){   
    this.http.doGet(this.ics._apiurl + 'service001/getLoadLOV').subscribe(
         data => {         
          if(data != null){
            if(data.ref004 != null){              
                if(!(data.ref004 instanceof Array)) {//Object
                    let m = [];
                    m[0] = data.ref004;
                    this.ref._lov3.ref028 = m;
                }else{
                   this.ref._lov3.ref028 = data.ref004;                                                    
                }                               
            }            
          }
         },          
        error => alert(error),
        () => {}
      );
  }
  
  //lovchangeevent
  changeEvent(options,tbindex){
      let indexvalue = tbindex.srno- 1;
      let text =options[options.selectedIndex].text; 
      this._lovobj.lovNo = text;
      let url:string =this.ics._apiurl+'service001/getLOVByLOVNo';
      let json:any  = this._lovobj;
        this.http.doPost(url,json).subscribe(
            data => {          
              if(data != null){                
                this._merchantobj.data[indexvalue].fielddesc =data.lovDesc2;
                this._merchantobj.data[indexvalue].fieldref =  options[options.selectedIndex].text;                 
              }
            },          
            error => alert(error),
            () => {}
          );  
  } 
  
}