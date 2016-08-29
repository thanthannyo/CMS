System.register(['angular2/core', 'angular2/router', './framework/rp-http.service', './framework/rp-intercom.service', './framework/rp-bean', './framework/rp-input.component', './framework/rp-references'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_http_service_1, rp_intercom_service_1, rp_bean_1, rp_input_component_1, rp_references_1;
    var RpLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_bean_1_1) {
                rp_bean_1 = rp_bean_1_1;
            },
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            }],
        execute: function() {
            RpLoginComponent = (function () {
                function RpLoginComponent(ics, _router, http, ref, params) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.ref = ref;
                    this._remember = true;
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    this.ics._profile.role = 0;
                    this.ics.sendBean(new rp_bean_1.RpBean());
                    if (params.get("type") != null && params.get("type") == "anonymous")
                        this.anonymouse();
                }
                RpLoginComponent.prototype.goPost = function () {
                    var _this = this;
                    this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
                    var url = this.ics._apiurl + 'service001/signin';
                    var profile = { "userID": this._user, "password": this._pw };
                    this.http.doPost(url, profile).subscribe(function (data) {
                        _this.ics.sendBean({ t1: "rp-msg-off" });
                        if (data.role > 0) {
                            _this.authorize(data);
                        }
                        else {
                            _this._result = "Invalid User ID or Password";
                        }
                    }, function (error) {
                        _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
                    }, function () { });
                };
                RpLoginComponent.prototype.authorize = function (data) {
                    this.ics._profile = data;
                    this.ics.sendBean(new rp_bean_1.RpBean());
                    this._router.navigate(['MenuLovsetup']);
                };
                RpLoginComponent.prototype.anonymouse = function () {
                    this.ics._profile.role = 9;
                    this.ics._profile = {
                        "userName": ".",
                        "role": 9,
                        "logoText": "CMS",
                        "logoLink": "MenuLovsetup",
                        "commandCenter": "true",
                        "menus": [
                            { "menuItem": "", "caption": "SetUp",
                                "menuItems": [{ "menuItem": "MenuLovsetup", "caption": "LOV SetUp" },
                                    { "menuItem": "FrmCMSSetup", "caption": "CMS SetUp" },
                                    { "menuItem": "Cmsentry", "caption": "CMS Entry" },
                                    { "menuItem": "ImageUpload", "caption": "Image Upload" }
                                ]
                            }
                        ],
                        "rightMenus": [{ "menuItem": "Login", "caption": "Sign In" }]
                    };
                    ;
                    this.ics.sendBean(new rp_bean_1.RpBean());
                    this._router.navigate(['MenuLovsetup']);
                };
                RpLoginComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                RpLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-login',
                        template: "   \n  <div class=\"container\">\n      <div class=\"row\"> <h1>{{ics._appname}}</h1>  </div>\n      <div class=\"row\">&nbsp;</div>\n      <div class=\"row\"> <h2 class=\"form-signin-heading\">Sign In</h2> </div>\n      <form class=\"form-inline\" (ngSubmit)=\"goPost()\">\n        <div class=\"row\">\n        <label for=\"inputUserID\" class=\"sr-only\">User ID</label>\n        <input type=\"text\" id=\"inputUserID\" class=\"form-control\" placeholder=\"User ID\" required autofocus [(ngModel)]=_user>\n        </div>\n        \n        <div class=\"row\">\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=_pw>\n        </div>\n        <div class=\"row\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\" [(ngModel)]=_remember> Remember me\n          </label>\n        </div>\n        </div>\n        <div class=\"row\">\n        <button class=\"btn btn-md btn-primary \" type=\"submit\">Sign in</button> \n        </div>\n      </form> \n        <div class=\"row\">\n        <button class=\"btn btn-link\" (click)=\"anonymouse()\">Anonymous</button> \n        </div>\n        <p>{{_result}} </p> \n      </div>\n  ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, router_1.RouteParams])
                ], RpLoginComponent);
                return RpLoginComponent;
            }());
            exports_1("RpLoginComponent", RpLoginComponent);
        }
    }
});
//# sourceMappingURL=rp-login.component.js.map