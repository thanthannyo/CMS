// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {Component, Input,Output,EventEmitter} from 'angular2/core'; 
import {RpIntercomService} from './rp-intercom.service'; 
import {RpReferences} from './rp-references'; 
@Component({
    selector: 'rp-input',
    template:`  
    <label class="{{rpLabelClass}} control-label" for="rpId" >{{rpLabel}}</label>
    
    <div class="{{rpClass}}">
        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired=='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" required autocomplete="{{rpAutoComplete}}" >
        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired!='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)"   autocomplete="{{rpAutoComplete}}">
        <input id="{{rpId}}"  *ngIf="rpReadonly=='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" readonly  autocomplete="{{rpAutoComplete}}">


        <input id="{{rpId}}" *ngIf="(rpType=='boolean'||rpType=='checkbox')&& rpReadonly!='true'" class="form-control" type="checkbox" [ngModel]="rpModel" (ngModelChange)="updateData($event)"  >
        <input id="{{rpId}}" *ngIf="(rpType=='boolean'||rpType=='checkbox')&& rpReadonly=='true'" class="form-control" type="checkbox" [ngModel]="rpModel" (ngModelChange)="updateData($event)"  >

        <select id="{{rpId}}"  *ngIf="rpType=='gender'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov1.gender" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='gender'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="#item of ref._lov1.gender" value="{{item.value}}" >{{item.caption}}</option>
        </select>  

        <select id="{{rpId}}"  *ngIf="rpType=='ref001'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref001" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='ref001'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="#item of ref._lov3.ref001" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
         
        <select id="{{rpId}}"  *ngIf="rpType=='ref002'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref002" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='ref002'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref002" value="{{item.value}}" >{{item.caption}}</option>
        </select>          
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref003'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref003" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref003'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="#item of ref._lov3.ref003" value="{{item.value}}" >{{item.caption}}</option>
        </select>        
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref004'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref004" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref004'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref004" value="{{item.value}}" >{{item.caption}}</option>
        </select>
          
        <select id="{{rpId}}"  *ngIf="rpType=='ref005'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref005" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref005'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref005" value="{{item.value}}" >{{item.caption}}</option>
        </select>
                  
        <select id="{{rpId}}"  *ngIf="rpType=='ref006'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref006" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref006'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref006" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref007'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref007" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='ref007'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref007" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
                
        <select id="{{rpId}}"  *ngIf="rpType=='ref008'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref008" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref008'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref008" value="{{item.value}}" >{{item.caption}}</option>
        </select>
          
        <select id="{{rpId}}"  *ngIf="rpType=='ref009'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref009" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref009'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref009" value="{{item.value}}" >{{item.caption}}</option>
        </select>   
         <select id="{{rpId}}"  *ngIf="rpType=='ref014' && rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref014" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref014' && rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref014" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref016' && rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref016" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref016' && rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref016" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref020' && rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref020" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref020' && rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref020" value="{{item.value}}" >{{item.caption}}</option>
        </select>   
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref021'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref021" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref021'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref021" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref022'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref022" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref022'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref022" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref023'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref023" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref023'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref023" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref024'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref024" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref024'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref024" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref025'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref025" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref025'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref025" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref026'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref026" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref026'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref026" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref027'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref027" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref027'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref027" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref028'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="#item of ref._lov3.ref028" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref028'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="#item of ref._lov3.ref028" value="{{item.value}}" >{{item.caption}}</option>
        </select>   
        
           
        
    </div>
    
     
    `,
  providers: [] 
})
export class RpInputComponent {
    //bindModelData >
    @Input() rpId : string;
    @Input() rpLabel : string;
    @Input() rpClass : string;
    @Input() rpLabelClass : string;
    @Input() rpLabelStyle : string;
    @Input() rpType : string; 
    @Input() rpRequired : string;
    @Input() rpReadonly : string;
    @Input() rpAutoComplete : string;
    @Input() rpModel: any;
    @Output() rpModelChange: any = new EventEmitter(); 
    @Output() rpTest: any = new EventEmitter(); 
    public ref001:any; 
    
  constructor(private ref: RpReferences,private ics: RpIntercomService) {
      if (this.rpId==null||this.rpId=="")   this.rpId="myid";  
      if (this.rpLabelClass==null||this.rpLabelClass=="")   this.rpLabelClass="col-md-2";  
      if (this.rpClass==null||this.rpClass=="")   this.rpClass="col-md-4";   
      if (this.rpAutoComplete==null||this.rpAutoComplete=="")   this.rpAutoComplete="off";  
  }
    updateData(event) { 
      this.rpModel = event;
      this.rpModelChange.emit(event);
      if (this.rpModel=="123") this.rpTest.emit();
    } 
   public hello(){
     return "?";
   }
}