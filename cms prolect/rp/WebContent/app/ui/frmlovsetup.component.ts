// RP Framework
import { Router,RouteParams } from 'angular2/router'; 
import {Component, Input, OnDestroy} from 'angular2/core';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {Subscription}   from 'rxjs/Subscription';
import {RpBean} from '../framework/rp-bean'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {ClientUtil} from '../util/rp-client.util'; 
declare var jQuery: any; 
declare var geoloc: any;
@Component({
      selector: 'frmlovsetup',
      template: 
      `
<div class="container" >
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal" (ngSubmit)="goSave()" >
      <fieldset>  
      <legend>LOV SetUp Infromation</legend>
       
        <div class="form-group"> 
          <div class="col-md-12">
              <button type="button" class="btn btn-primary btn-md" (click)="goNew()">New</button>
              <button type="submit" class="btn btn-success btn-md">Save</button>
              <button type="button" class="btn btn-info btn-md" (click)="goList();">List</button> 
          </div>
        </div>          

        <div class="form-group">
         <rp-input [(rpModel)]="_lovsetupobj.lovNo" rpClass = "col-md-2" rpLabelClass = "col-md-2 control-label" rpType="text" rpLabel="LOV No." rpPlaceHolder = "TBA" rpReadonly = "true">TBA</rp-input>         
        </div>         
        <div class="form-group">
          <rp-input rpRequired = "true" [(rpModel)]="_lovsetupobj.lovDesc2" rpClass = "col-md-2" rpLabelClass = "col-md-2 control-label" rpType="text" rpLabel="LOV Description" ></rp-input>                            
        </div>
       
       <div class="form-group">
          <div class="col-md-12">
            <button class="btn btn-Info" type="button" (click)="goAddLovsetup()">Add</button>
          </div>
       </div>
       <div class="form-group">
          <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>LOV Code</th>
                    <th>LOV Description</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#obj of _lovsetupobj.data">
                    <td class = "col-md-1">{{obj.srno}}</td>
                    <td class = "col-md-2" >
                       <rp-input rpRequired = "true" [(rpModel)]="obj.lovCde" rpType="text" rpLabelClass = "col-md-0" rpClass = "col-md-0"></rp-input>
                    </td>
                    <td class = "col-md-2">
                       <rp-input rpRequired = "true" [(rpModel)]="obj.lovDesc1" rpType="text" rpLabelClass = "col-md-0" rpClass = "col-md-0"></rp-input>
                    </td>

                    <td>
                        <button class="btn btn-Danger"  type="button" (click)="goRemove(obj)" >X</button>
                    </td>
                  </tr> 
                </tbody>
            </table>
          </div>
       </div>
       </fieldset>
       </form> 
       </div>
       </div>
    </div>`
    ,directives: [RpInputComponent],
     providers: [RpHttpService,ClientUtil]
}) 

export class FrmLovSetupComponent {  
  // RP Framework 
  subscription:Subscription; 
  // Application Specific 
  //details
  _output1 = "";
  _lovsetupobj = {"lovNo":"TBA","sysKey":"","createdDate":"","modiDate":"","userID":"User1","recStatus":"0","lovDesc2":"","data" : [{"srno":"1","lovCde":"","lovDesc1":""}], "messagecode":"","messagedesc":""}; 
  constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService, private l_util :ClientUtil) { 
    // RP Framework
    
    
    this.subscription = ics.rpbean$.subscribe(   x => { })
    if  (!ics.getRole() || ics.getRole()==0 ) this._router.navigate(['Login',, { p1: '*' }]);
    // Application Specifi
      this.ics.confirmUpload(false);
    
     this._lovsetupobj.createdDate = this.l_util.getTodayDate();
     this._lovsetupobj.modiDate = this.l_util.getTodayDate();
       
    if (params.get("cmd")!=null && params.get("cmd")=="NEW" ) 
    {     
       this._lovsetupobj.createdDate = this.l_util.getTodayDate();
       this._lovsetupobj.modiDate = this.l_util.getTodayDate();
    } 
     else if (params.get("cmd")!=null && params.get("cmd")=="READ" ) {
      let k = params.get("p1");  
      this._lovsetupobj = {"lovNo":k,"sysKey":"","createdDate":"","modiDate":"","userID":"User1","recStatus":"0","lovDesc2":"","data" : [{"srno":"1","lovCde":"","lovDesc1":""}], "messagecode":"","messagedesc":""};
     this.goPostByLovNo(k);
    }
  }
  
   goNew(){
    this._lovsetupobj = {"lovNo":"TBA","sysKey":"","createdDate":"","modiDate":"","userID":"User1","recStatus":"0","lovDesc2":"","data" : [{"srno":"1","lovCde":"","lovDesc1":""}], "messagecode":"","messagedesc":""}; 
    this._lovsetupobj.createdDate = this.l_util.getTodayDate();
    this._lovsetupobj.modiDate = this.l_util.getTodayDate();
  }
    

  goSave(){
    let url:string =this.ics._apiurl + 'service001/savelovSetUp';
     let json:any  = this._lovsetupobj;
    this.http.doPost(url,json).subscribe(
      data => { 
         this._lovsetupobj=data;
        this._output1 = JSON.stringify(data);         

        console.log(this._lovsetupobj.messagedesc);
            
        if(this._lovsetupobj.messagecode=="0000"){
         this.popupMessage(this._lovsetupobj.messagedesc);
         }    
        this._lovsetupobj.lovNo="TBA";
        }, error => alert(error),() => {});
  }
  
  
  goList() { 
       this._router.navigate(['MenuLovsetupList',, {cmd:"LIST"}]); 
     } 
  
  goPostByLovNo(k) {        
    let url:string =this.ics._apiurl + 'service001/lovNobyID';
    this._lovsetupobj.lovNo=k;
    let json:any  = this._lovsetupobj;
    this.http.doPost(url,json).subscribe(
      res => { 
        
        this._output1 = JSON.stringify(res);
        console.log(this._output1); 
        if(res != null){
          this._lovsetupobj = res;
            if(!(res.data instanceof Array)) {  
              let m=[];
              m[0]=res.data;
              this._lovsetupobj.data=m;
            }     
        } 
      },error => alert(error),() => {});
  }
  
  popupMessage(message){

    this.ics.sendBean({"t1":"rp-msg","t2":"Customer Information","t3": message}); 
  }
 
goRemove(p){
    let index = this._lovsetupobj.data.indexOf(p);
    let length = this._lovsetupobj.data.length;    
    if(length<2){
      this._lovsetupobj.data[0]={srno:("").toString(),  lovCde:"", lovDesc1:""};
    } else {
      this._lovsetupobj.data.splice(index,1);
    }
    for (var i = 0; i < length; i++) {
     let maxsrno = i;
     maxsrno = maxsrno + 1;
     this._lovsetupobj.data[i].srno =  (maxsrno).toString();
    }
  }
  
 goAddLovsetup(){

    if(this._lovsetupobj.data[0].srno==""){
      this._lovsetupobj.data[0].srno="1";
    }
    let maxsrno = this._lovsetupobj.data.length;
    maxsrno = maxsrno + 1;
    this._lovsetupobj.data.push({srno:(maxsrno).toString(), lovCde:"", lovDesc1:""});
  } 
}
