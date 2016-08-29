// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
// RP Framework
import {Component} from 'angular2/core'  
import {Title}    from 'angular2/platform/browser';
import {RouteConfig, CanActivate,ROUTER_DIRECTIVES,ComponentInstruction } from 'angular2/router';
import {RpIntercomService} from './framework/rp-intercom.service';  
import {RpReferences} from './framework/rp-references';  
import {RpMenuComponent} from './framework/rp-menu.component'; 
import {RpLoginComponent} from './rp-login.component'; 
import {RpHttpService} from './framework/rp-http.service';  
declare var jQuery: any; 
// RP Application Spedific 
import {FrmSearchComponent} from './ui/frmsearch.component';  
import {Frm000Component} from './ui/frm000.component';  
import {Frm001Component} from './ui/frm001.component';   
import {Frm001ListComponent} from './ui/frm001-list.component';   
import {Frm002Component} from './ui/frm002.component';
import {FrmLovSetupComponent} from './ui/frmlovsetup.component'; 
import {FrmLOVSetUpListComponent} from './ui/frmlovsetup-list.component';
import {FrmCMSMerchantEntryFormComponent} from './ui/frmcmsmerchantentryform.component';
import {FrmMerchantEntryListComponent} from './ui/frmcmsmerchantentry-list.component'
import {AppFrmCMSSetup} from './ui/frmcmssetup.component'
import {AppFrmCMSSetupList} from './ui/frmcmssetuplist.component'
import {FrmImageUpload} from './ui/imageUpload'
// END   
@Component({
    selector: 'rp-root',
  template: ` 
    <rp-menu *ngIf="showmenu"></rp-menu>
    
    <div class="alert " id="alertBox" role="alert" style="display:none;" >
			<button type="button" class="close" data-hide="alert" (click) = "Close()" >&times;</button>		
			<div id = "alertmsg">Hi! Moh Moh Pan Phyu Mhwe</div>
		</div>
    
    <router-outlet></router-outlet>
    
    <div id="rootpopup" class="modal fade" role="dialog">
      <div id="rootpopupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="rootpopuptitle" class="modal-title">RP Report ***</h4>
          </div>
          <div id="rootpopupbody" class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES,RpMenuComponent],
  providers: [RpIntercomService,RpReferences,RpHttpService]
})
@RouteConfig([ 
  {
    path: '/login',
    name: 'Login',
    component: RpLoginComponent,
    useAsDefault: true  
  }, {
    path: '/command',
    name: 'Command',
    component: FrmSearchComponent 
  }, {
    path: '/menu00',
    name: 'Menu00',
    component: Frm000Component 
  },  {
    path: '/menu01',
    name: 'Menu01',
    component: Frm001Component  
  },   {
    path: '/menu01-list',
    name: 'Menu01-List',
    component: Frm001ListComponent  
  }, 
  {
    path: '/menu02',
    name: 'Menu02',
    component: Frm002Component
  }, 
  {
    path: '/menu03',
    name: 'Menu03',
    component: Frm002Component
  },
  {
    path: '/menulovsetup',
    name: 'MenuLovsetup',
    component: FrmLovSetupComponent
  },
  {
    path: '/menulovsetuplist',
    name: 'MenuLovsetupList',
    component: FrmLOVSetUpListComponent
  },
 {/// add cms entry
    path: '/cmsentry',
    name: 'Cmsentry',
    component: FrmCMSMerchantEntryFormComponent
  },
  {
    path: '/cmsmerchantList',
    name :'CmsmerchantList',
    component: FrmMerchantEntryListComponent
  },
   {
    path: '/frmcmssetup',
    name :'FrmCMSSetup',
    component: AppFrmCMSSetup
  },
  {
    //AppFrmCMSSetupList FrmImageUpload
    path: '/frmcmssetuplist',
    name :'FrmCMSSetupList',
    component: AppFrmCMSSetupList
  },
  {
    //FrmImageUpload 
    path: '/imageupload',
    name :'ImageUpload',
    component: FrmImageUpload
  }
  
  
]) 
export class RpRootComponent { 
  showmenu:boolean;
  _time: any;
  timer:any;
  
  constructor(private ics: RpIntercomService,private ref: RpReferences, private http: RpHttpService, private title: Title) {
    this.showmenu=false; 
    ics.rpbean$.subscribe(   x => {    
      this.showmenu=ics.isMenuBar();   
      if (x.t1!==null && x.t1=="rp-popup") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
          jQuery("#rootpopuptitle").text(x.t2);
          jQuery("#rootpopupbody").load(x.t3);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-wait") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text("Please Wait");
          jQuery("#rootpopupbody").text(x.t2);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-error") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text("System Exception");
          jQuery("#rootpopupbody").text(x.t2);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-msg") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text(x.t2);
          jQuery("#rootpopupbody").text(x.t3);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-msg-off") { 
          jQuery("#rootpopuptitle").text("");
          jQuery("#rootpopupbody").text(""); 
          jQuery("#rootpopup").modal('hide');
      }else if (x.t1!==null && x.t1=="rp-alert") {
          this._time = x.n1;
          jQuery("#alertBox").attr('class', x.t3);
          jQuery("#alertmsg").text(x.t2);
          jQuery('#alertBox').slideDown();
          this.timer = setTimeout(() => {
            jQuery('#alertBox').slideUp();
          }, this._time);
      
      }
    });  
    this.init();
  }
    init() {      
    this.http.doGet('json/config.json?random=' +Math.random()).subscribe(
      data =>{
        this.ics._title=data.title;
        this.ics._app=data.app;
        this.ics._appname=data.appname;
        this.title.setTitle( this.ics._title);  
        this.ics._apiurl =data.apiurl;
        this.ics._rpturl = data.rpturl;
      },
      error => alert(error),
      () => {}
    );   
    this.http.doGet('json/lov3.json?random=' +Math.random()).subscribe(
      data =>{
         this.ref._lov3=data; 
      },
      error => alert(error),
      () => {}
    );
    
  } 
}
