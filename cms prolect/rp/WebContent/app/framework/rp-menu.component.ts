// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Router,RouteConfig, CanActivate,ROUTER_DIRECTIVES,ComponentInstruction } from 'angular2/router'; 
import {RpIntercomService} from './rp-intercom.service'; 
import {Subscription}   from 'rxjs/Subscription';
@Component({
    selector: 'rp-menu',
    template:`
      <nav   class="navbar navbar-inverse navbar-fixed-top"  >
      <div class="container col-md-12">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span> 
          </button>
          <a class="navbar-brand" style="color:lightyellow;" [routerLink]="[_profile.logoLink]">{{_profile.logoText}}</a> 
          <span class="navbar-brand" style="font-size:small" > {{_profile.userName}} </span>  
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li *ngFor="#item of _profile.menus;" [class]="item.menuItem==''?'dropdown':''">
                    <a (click)="clk()"  *ngIf="item.menuItem!=''"  [routerLink]="[item.menuItem]" >{{item.caption}}</a> 
                    <a    *ngIf="item.menuItem==''"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{{item.caption}} <span class="caret"></span></a> 
                      <ul *ngIf="item.menuItem==''" class="dropdown-menu">
                        <li *ngFor="#subitem of item.menuItems;" ><a (click)="clk()"  [routerLink]="[subitem.menuItem]">{{subitem.caption}}</a></li> 
                      </ul>
            </li>  
          </ul>
          <div  *ngIf="_right" class=" navbar-right">
            <input (keyup.enter)="cmd();clk();" [(ngModel)]="_cmd" *ngIf="_profile.commandCenter!='false'" placeholder=" Search"  type="text" class="nav navbar-nav " style="margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;">
            <ul class="nav navbar-nav">
            <li *ngFor="#item of _profile.rightMenus;" [class]="item.menuItem==''?'dropdown':''">
                    <a (click)="clk()"  *ngIf="item.menuItem!=''"  [routerLink]="[item.menuItem]" >{{item.caption}}</a> 
                    <a   *ngIf="item.menuItem==''"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{{item.caption}} <span class="caret"></span></a> 
                      <ul *ngIf="item.menuItem==''" class="dropdown-menu">
                        <li *ngFor="#subitem of item.menuItems;" ><a (click)="clk()"  [routerLink]="[subitem.menuItem]">{{subitem.caption}}</a></li> 
                      </ul>
            </li>  
            </ul>
            </div>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class RpMenuComponent {  
  subscription:Subscription; 
  _right=true;
  _cmd="";
  _profile={
    "userName":"?",
    "logoText":"A2",
    "logoLink":"Menu00", 
    "role":100,
    "commandCenter":"false",
    "menus":[{"menuItem":"Menu01","caption":"Menu 01"},
            {"menuItem":"Menu02","caption":"Menu 02"},
            {"menuItem":"Menu03","caption":"Menu 03"},
            {"menuItem":"","caption":"Menu Group",
              "menuItems":
              [{"menuItem":"Menu01","caption":"Menu 001"},
              {"menuItem":"Menu02","caption":"Menu 002"},
              {"menuItem":"Menu03","caption":"Menu 003"}]
            }
    ],    
    "rightMenus":[{"menuItem":"Menu01","caption":"Menu 01"},
            {"menuItem":"Menu02","caption":"Menu 02"},
            {"menuItem":"Menu03","caption":"Menu 03"},
            {"menuItem":"","caption":"Menu Group",
              "menuItems":
              [{"menuItem":"Menu01","caption":"Menu 001"},
              {"menuItem":"Menu02","caption":"Menu 002"},
              {"menuItem":"Menu03","caption":"Menu 003"}]
            }
    ]
  };
  constructor(private ics: RpIntercomService,private _router: Router  ) { 
    this._profile =ics._profile ; 
    this.subscription = ics.rpbean$.subscribe(     x => {     this._profile =ics._profile ;    } );
  } 
  cmd(){
    this._router.navigate(['Command',, { cmd: this._cmd }]);
  }
    clk(){   
    document.getElementById("navbar").className = "navbar-collapse collapse";
  } 
}