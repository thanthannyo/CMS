// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
System.register(['angular2/core', 'angular2/router', './rp-intercom.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, rp_intercom_service_1;
    var RpMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            }],
        execute: function() {
            RpMenuComponent = (function () {
                function RpMenuComponent(ics, _router) {
                    var _this = this;
                    this.ics = ics;
                    this._router = _router;
                    this._right = true;
                    this._cmd = "";
                    this._profile = {
                        "userName": "?",
                        "logoText": "A2",
                        "logoLink": "Menu00",
                        "role": 100,
                        "commandCenter": "false",
                        "menus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
                            { "menuItem": "Menu02", "caption": "Menu 02" },
                            { "menuItem": "Menu03", "caption": "Menu 03" },
                            { "menuItem": "", "caption": "Menu Group",
                                "menuItems": [{ "menuItem": "Menu01", "caption": "Menu 001" },
                                    { "menuItem": "Menu02", "caption": "Menu 002" },
                                    { "menuItem": "Menu03", "caption": "Menu 003" }]
                            }
                        ],
                        "rightMenus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
                            { "menuItem": "Menu02", "caption": "Menu 02" },
                            { "menuItem": "Menu03", "caption": "Menu 03" },
                            { "menuItem": "", "caption": "Menu Group",
                                "menuItems": [{ "menuItem": "Menu01", "caption": "Menu 001" },
                                    { "menuItem": "Menu02", "caption": "Menu 002" },
                                    { "menuItem": "Menu03", "caption": "Menu 003" }]
                            }
                        ]
                    };
                    this._profile = ics._profile;
                    this.subscription = ics.rpbean$.subscribe(function (x) { _this._profile = ics._profile; });
                }
                RpMenuComponent.prototype.cmd = function () {
                    this._router.navigate(['Command', , { cmd: this._cmd }]);
                };
                RpMenuComponent.prototype.clk = function () {
                    document.getElementById("navbar").className = "navbar-collapse collapse";
                };
                RpMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-menu',
                        template: "\n      <nav   class=\"navbar navbar-inverse navbar-fixed-top\"  >\n      <div class=\"container col-md-12\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span> \n          </button>\n          <a class=\"navbar-brand\" style=\"color:lightyellow;\" [routerLink]=\"[_profile.logoLink]\">{{_profile.logoText}}</a> \n          <span class=\"navbar-brand\" style=\"font-size:small\" > {{_profile.userName}} </span>  \n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li *ngFor=\"#item of _profile.menus;\" [class]=\"item.menuItem==''?'dropdown':''\">\n                    <a (click)=\"clk()\"  *ngIf=\"item.menuItem!=''\"  [routerLink]=\"[item.menuItem]\" >{{item.caption}}</a> \n                    <a    *ngIf=\"item.menuItem==''\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">{{item.caption}} <span class=\"caret\"></span></a> \n                      <ul *ngIf=\"item.menuItem==''\" class=\"dropdown-menu\">\n                        <li *ngFor=\"#subitem of item.menuItems;\" ><a (click)=\"clk()\"  [routerLink]=\"[subitem.menuItem]\">{{subitem.caption}}</a></li> \n                      </ul>\n            </li>  \n          </ul>\n          <div  *ngIf=\"_right\" class=\" navbar-right\">\n            <input (keyup.enter)=\"cmd();clk();\" [(ngModel)]=\"_cmd\" *ngIf=\"_profile.commandCenter!='false'\" placeholder=\" Search\"  type=\"text\" class=\"nav navbar-nav \" style=\"margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;\">\n            <ul class=\"nav navbar-nav\">\n            <li *ngFor=\"#item of _profile.rightMenus;\" [class]=\"item.menuItem==''?'dropdown':''\">\n                    <a (click)=\"clk()\"  *ngIf=\"item.menuItem!=''\"  [routerLink]=\"[item.menuItem]\" >{{item.caption}}</a> \n                    <a   *ngIf=\"item.menuItem==''\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">{{item.caption}} <span class=\"caret\"></span></a> \n                      <ul *ngIf=\"item.menuItem==''\" class=\"dropdown-menu\">\n                        <li *ngFor=\"#subitem of item.menuItems;\" ><a (click)=\"clk()\"  [routerLink]=\"[subitem.menuItem]\">{{subitem.caption}}</a></li> \n                      </ul>\n            </li>  \n            </ul>\n            </div>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router])
                ], RpMenuComponent);
                return RpMenuComponent;
            }());
            exports_1("RpMenuComponent", RpMenuComponent);
        }
    }
});
//# sourceMappingURL=rp-menu.component.js.map