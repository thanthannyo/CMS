System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './framework/rp-intercom.service', './framework/rp-references', './framework/rp-menu.component', './rp-login.component', './framework/rp-http.service', './ui/frmsearch.component', './ui/frm000.component', './ui/frm001.component', './ui/frm001-list.component', './ui/frm002.component', './ui/frmlovsetup.component', './ui/frmlovsetup-list.component', './ui/frmcmsmerchantentryform.component', './ui/frmcmsmerchantentry-list.component', './ui/frmcmssetup.component', './ui/frmcmssetuplist.component', './ui/imageUpload'], function(exports_1, context_1) {
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
    var core_1, browser_1, router_1, rp_intercom_service_1, rp_references_1, rp_menu_component_1, rp_login_component_1, rp_http_service_1, frmsearch_component_1, frm000_component_1, frm001_component_1, frm001_list_component_1, frm002_component_1, frmlovsetup_component_1, frmlovsetup_list_component_1, frmcmsmerchantentryform_component_1, frmcmsmerchantentry_list_component_1, frmcmssetup_component_1, frmcmssetuplist_component_1, imageUpload_1;
    var RpRootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_menu_component_1_1) {
                rp_menu_component_1 = rp_menu_component_1_1;
            },
            function (rp_login_component_1_1) {
                rp_login_component_1 = rp_login_component_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (frmsearch_component_1_1) {
                frmsearch_component_1 = frmsearch_component_1_1;
            },
            function (frm000_component_1_1) {
                frm000_component_1 = frm000_component_1_1;
            },
            function (frm001_component_1_1) {
                frm001_component_1 = frm001_component_1_1;
            },
            function (frm001_list_component_1_1) {
                frm001_list_component_1 = frm001_list_component_1_1;
            },
            function (frm002_component_1_1) {
                frm002_component_1 = frm002_component_1_1;
            },
            function (frmlovsetup_component_1_1) {
                frmlovsetup_component_1 = frmlovsetup_component_1_1;
            },
            function (frmlovsetup_list_component_1_1) {
                frmlovsetup_list_component_1 = frmlovsetup_list_component_1_1;
            },
            function (frmcmsmerchantentryform_component_1_1) {
                frmcmsmerchantentryform_component_1 = frmcmsmerchantentryform_component_1_1;
            },
            function (frmcmsmerchantentry_list_component_1_1) {
                frmcmsmerchantentry_list_component_1 = frmcmsmerchantentry_list_component_1_1;
            },
            function (frmcmssetup_component_1_1) {
                frmcmssetup_component_1 = frmcmssetup_component_1_1;
            },
            function (frmcmssetuplist_component_1_1) {
                frmcmssetuplist_component_1 = frmcmssetuplist_component_1_1;
            },
            function (imageUpload_1_1) {
                imageUpload_1 = imageUpload_1_1;
            }],
        execute: function() {
            // END   
            RpRootComponent = (function () {
                function RpRootComponent(ics, ref, http, title) {
                    var _this = this;
                    this.ics = ics;
                    this.ref = ref;
                    this.http = http;
                    this.title = title;
                    this.showmenu = false;
                    ics.rpbean$.subscribe(function (x) {
                        _this.showmenu = ics.isMenuBar();
                        if (x.t1 !== null && x.t1 == "rp-popup") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
                            jQuery("#rootpopuptitle").text(x.t2);
                            jQuery("#rootpopupbody").load(x.t3);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-wait") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text("Please Wait");
                            jQuery("#rootpopupbody").text(x.t2);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-error") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text("System Exception");
                            jQuery("#rootpopupbody").text(x.t2);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-msg") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text(x.t2);
                            jQuery("#rootpopupbody").text(x.t3);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-msg-off") {
                            jQuery("#rootpopuptitle").text("");
                            jQuery("#rootpopupbody").text("");
                            jQuery("#rootpopup").modal('hide');
                        }
                        else if (x.t1 !== null && x.t1 == "rp-alert") {
                            _this._time = x.n1;
                            jQuery("#alertBox").attr('class', x.t3);
                            jQuery("#alertmsg").text(x.t2);
                            jQuery('#alertBox').slideDown();
                            _this.timer = setTimeout(function () {
                                jQuery('#alertBox').slideUp();
                            }, _this._time);
                        }
                    });
                    this.init();
                }
                RpRootComponent.prototype.init = function () {
                    var _this = this;
                    this.http.doGet('json/config.json?random=' + Math.random()).subscribe(function (data) {
                        _this.ics._title = data.title;
                        _this.ics._app = data.app;
                        _this.ics._appname = data.appname;
                        _this.title.setTitle(_this.ics._title);
                        _this.ics._apiurl = data.apiurl;
                        _this.ics._rpturl = data.rpturl;
                    }, function (error) { return alert(error); }, function () { });
                    this.http.doGet('json/lov3.json?random=' + Math.random()).subscribe(function (data) {
                        _this.ref._lov3 = data;
                    }, function (error) { return alert(error); }, function () { });
                };
                RpRootComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-root',
                        template: " \n    <rp-menu *ngIf=\"showmenu\"></rp-menu>\n    \n    <div class=\"alert \" id=\"alertBox\" role=\"alert\" style=\"display:none;\" >\n\t\t\t<button type=\"button\" class=\"close\" data-hide=\"alert\" (click) = \"Close()\" >&times;</button>\t\t\n\t\t\t<div id = \"alertmsg\">Hi! Moh Moh Pan Phyu Mhwe</div>\n\t\t</div>\n    \n    <router-outlet></router-outlet>\n    \n    <div id=\"rootpopup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"rootpopupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"rootpopuptitle\" class=\"modal-title\">RP Report ***</h4>\n          </div>\n          <div id=\"rootpopupbody\" class=\"modal-body\">\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, rp_menu_component_1.RpMenuComponent],
                        providers: [rp_intercom_service_1.RpIntercomService, rp_references_1.RpReferences, rp_http_service_1.RpHttpService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/login',
                            name: 'Login',
                            component: rp_login_component_1.RpLoginComponent,
                            useAsDefault: true
                        }, {
                            path: '/command',
                            name: 'Command',
                            component: frmsearch_component_1.FrmSearchComponent
                        }, {
                            path: '/menu00',
                            name: 'Menu00',
                            component: frm000_component_1.Frm000Component
                        }, {
                            path: '/menu01',
                            name: 'Menu01',
                            component: frm001_component_1.Frm001Component
                        }, {
                            path: '/menu01-list',
                            name: 'Menu01-List',
                            component: frm001_list_component_1.Frm001ListComponent
                        },
                        {
                            path: '/menu02',
                            name: 'Menu02',
                            component: frm002_component_1.Frm002Component
                        },
                        {
                            path: '/menu03',
                            name: 'Menu03',
                            component: frm002_component_1.Frm002Component
                        },
                        {
                            path: '/menulovsetup',
                            name: 'MenuLovsetup',
                            component: frmlovsetup_component_1.FrmLovSetupComponent
                        },
                        {
                            path: '/menulovsetuplist',
                            name: 'MenuLovsetupList',
                            component: frmlovsetup_list_component_1.FrmLOVSetUpListComponent
                        },
                        {
                            path: '/cmsentry',
                            name: 'Cmsentry',
                            component: frmcmsmerchantentryform_component_1.FrmCMSMerchantEntryFormComponent
                        },
                        {
                            path: '/cmsmerchantList',
                            name: 'CmsmerchantList',
                            component: frmcmsmerchantentry_list_component_1.FrmMerchantEntryListComponent
                        },
                        {
                            path: '/frmcmssetup',
                            name: 'FrmCMSSetup',
                            component: frmcmssetup_component_1.AppFrmCMSSetup
                        },
                        {
                            //AppFrmCMSSetupList FrmImageUpload
                            path: '/frmcmssetuplist',
                            name: 'FrmCMSSetupList',
                            component: frmcmssetuplist_component_1.AppFrmCMSSetupList
                        },
                        {
                            //FrmImageUpload 
                            path: '/imageupload',
                            name: 'ImageUpload',
                            component: imageUpload_1.FrmImageUpload
                        }
                    ]), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_references_1.RpReferences, rp_http_service_1.RpHttpService, browser_1.Title])
                ], RpRootComponent);
                return RpRootComponent;
            }());
            exports_1("RpRootComponent", RpRootComponent);
        }
    }
});
//# sourceMappingURL=rp-root.component.js.map