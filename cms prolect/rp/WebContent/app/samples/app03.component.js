System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-http.service', '../framework/rp-bean', '../framework/rp-input.component'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_http_service_1, rp_bean_1, rp_input_component_1;
    var App03Component;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_bean_1_1) {
                rp_bean_1 = rp_bean_1_1;
            },
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            }],
        execute: function() {
            // Application Specific
            App03Component = (function () {
                function App03Component(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this._localdata = "";
                    this._gender = "m";
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific
                    this._para1 = params.get("p1");
                }
                // Application Specific
                App03Component.prototype.send = function () { this.ics.sendBean(new rp_bean_1.RpBean()); };
                App03Component.prototype.gotologin = function () { this._router.navigate(['Login']); };
                App03Component.prototype.onetwothree = function () { console.log("onetwothree 123"); };
                App03Component.prototype.goGet = function () {
                    var _this = this;
                    this.http.doGet('json/lov3.json').subscribe(function (data) { return _this._result = JSON.stringify(data); }, function (error) { return alert(error); }, function () { });
                };
                App03Component.prototype.goPost = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/method002';
                    var json = { "n1": "9234.11", "syskey": "765", "t1": this._localdata, "t2": this._gender, "t3": "333" };
                    this.http.doPost(url, json).subscribe(function (data) { _this._result = JSON.stringify(data); }, function (error) { return alert(error); }, function () { });
                };
                App03Component.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                App03Component = __decorate([
                    core_1.Component({
                        selector: 'rp-app03',
                        template: "   \n    <div class=\"container col-md-12\">\n    \n    <form class=\"form-inline\"> \n    <div class=\"row\">\n    <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-12\">   \n    <button class=\"btn btn-default\" (click)=\"goPost()\" > Post </button>\n    <button class=\"btn btn-primary\" (click)=\"goGet()\" > Get </button> \n    <button class=\"btn btn-success\" (click)=\"send()\" > Send Message </button>\n    <button class=\"btn btn-warning\" (click)=\"gotologin()\" > Router: Sign Out </button> \n    <button class=\"btn btn-info\" > Info </button> \n    <button class=\"btn btn-link\" > Link </button> \n    <button class=\"btn btn-danger\" > Danger </button> \n    </div> \n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"> \n        <rp-input rpId=\"id1\" rpLabelStyle=\"width:100px;\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_localdata\" (rpTest)=\"onetwothree()\"></rp-input> \n      </div>\n      <div class=\"col-md-4\">\n        <rp-input rpId=\"id2\" rpLabelStyle=\"width:100px;\" rpType=\"gender\" rpLabel=\"Gender\" [(rpModel)]=\"_gender\"></rp-input> \n      </div>\n    </div>    \n    </form>\n    {{_result}}{{_para1}}\n    \n    </div>\n    ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], App03Component);
                return App03Component;
            }());
            exports_1("App03Component", App03Component);
        }
    }
});
//# sourceMappingURL=app03.component.js.map