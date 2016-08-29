import {Component, Input,Output,EventEmitter,ViewChild} from 'angular2/core'; 
//import {RpIntercomService} from './rp-intercom.service';
import {RpBean} from '../framework/rp-bean';
import {RpIntercomService} from '../framework/rp-intercom.service';  
import {RpInputComponent} from '../framework/rp-input.component';  
import {RpHttpService}from'../framework/rp-http.service';
import {RpReferences} from '../framework/rp-references';  
import {Router,RouteParams } from 'angular2/router'; 

declare var jQuery:any;

@Component({
    selector: 'upload',
    template:` 
      <div class="container">
        <div class="row clearfix"> 
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
                <form class="form-horizontal" (ngSubmit)="goSave()" >
                <fieldset>  
                <legend>Image Upload</legend>
                    <img id="output" [src]="_imgpath" width="15%" height="25%"/>
                    <span class="btn btn-primary" onclick="$(this).parent().find('input[type=file]').click();">Open
                    </span>
                    <input type="file" accept="image/*" (change)="loadImg($event)" style="display: none;">
                    <button type="button" class="btn btn-primary" (click)="goClear()">Clear</button>
                    <button type="button" class="btn btn-primary" (click)="goGet()">Get</button>
                </fieldset>
                </form>
             </div>
          </div>
      </div>
           ` ,  
       directives: [RpInputComponent],
       providers: [RpHttpService] 
})


export class FrmImageUpload{
 
    // Application Specific
    _imgpath="about:blank";

    constructor(private ics: RpIntercomService,private _router: Router,params: RouteParams, private http: RpHttpService, private ref: RpReferences) { 
   
   } 

  loadImg(event){
        
          this._imgpath = URL.createObjectURL(event.target.files[0]);
          let url:string =this.ics._apiurl + 'uploadservice/savePhoto?f=upload&fn='+event.target.files[0].name;
          let fd = new FormData();
          let xhr: XMLHttpRequest = new XMLHttpRequest();  
          for (let i = 0; i < event.target.files.length; i++) {
                fd.append("uploads[]", event.target.files[i],  event.target.files[i].name);
          } 
          xhr.open('POST', url, true);
          xhr.send(fd); 
      
 }
 
 goClear(){

        this._imgpath="about:blank";
 }

 goGet(){

        let url:string =this.ics._apiurl + 'uploadservice/getPhoto';
        this.http.doGet(url).subscribe(
        data => { 
                    this._imgpath = data.path; 
                },
        error => alert(error),() => {});

  }

}