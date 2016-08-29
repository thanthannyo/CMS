System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1;
    var Frm001Component;
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
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            }],
        execute: function() {
            // Application Specific
            Frm001Component = (function () {
                function Frm001Component(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific
                    this._postme = false;
                    this._note = "";
                    this._output1 = "";
                    this._obj = { "t1": "00-9-81", "t2": "Dr TTT", "t3": "No. 12, Inya Road, Yangon" };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                    if (params.get("cmd") != null && params.get("cmd") == "NEW") {
                        this._note = " NEW";
                        this._obj = { "t1": "", "t2": "", "t3": "" };
                    }
                    else if (params.get("cmd") != null && params.get("cmd") == "READ") {
                        var k = params.get("p1");
                        this._obj = { "t1": k, "t2": "", "t3": "" };
                    }
                }
                Frm001Component.prototype.goGet = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'service001/method001').subscribe(function (data) { return _this._output1 = JSON.stringify(data); }, function (error) { return alert(error); }, function () { });
                };
                Frm001Component.prototype.goPost = function () {
                    var _this = this;
                    console.log("post ok");
                    this._postme = false;
                    var url = this.ics._apiurl + 'service001/method002';
                    var json = this._obj;
                    this.http.doPost(url, json).subscribe(function (data) {
                        _this._output1 = JSON.stringify(data);
                        _this._obj = data;
                    }, function (error) { return alert(error); }, function () { });
                };
                Frm001Component.prototype.goList = function () {
                    this._router.navigate(['Menu01-List']);
                };
                Frm001Component.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                Frm001Component.prototype.nopost = function () {
                    return false;
                };
                Frm001Component = __decorate([
                    core_1.Component({
                        selector: 'frm001',
                        template: " \n    \n    \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\" (ngSubmit)=\"goPost()\" >\n      <fieldset>  \n      <legend>Form 001</legend>\n       \n      <div class=\"form-group\"> \n      <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\"  type=\"submit\"  >POST</button> \n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"goGet()\" >GET</button> \n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList();\" >List</button> {{_note}} \n      <button class=\"btn btn-primary\"  type=\"submit\"  >?</button> \n      </div>\n      </div>\n      \n      <div class=\"form-group\">\n      <rp-input rpType=\"text\" rpLabel=\"Customer ID\" [(rpModel)]=\"_obj.t1\" (keydown.enter)=\"nopost();\"></rp-input> \n      <rp-input rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t2\"></rp-input> \n      </div>\n      <div class=\"form-group\"> \n      <rp-input rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t3\"></rp-input>\n      </div>\n      \n      \n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">General</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab2\">Others</a></li> \n    </ul>\n    <div class=\"form-group\"> </div>\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane fade in active\"> \n        <div class=\"form-group\">\n            <rp-input rpType=\"text\" rpLabel=\"Field 1\" [(rpModel)]=\"_obj.t1\"></rp-input> \n        </div>\n        <div class=\"form-group\"> \n            <rp-input rpType=\"text\" rpLabel=\"Field 2\" [(rpModel)]=\"_obj.t2\"></rp-input>   \n            <rp-input rpType=\"text\" rpLabel=\"Field 3\" [(rpModel)]=\"_obj.t3\"></rp-input>  \n        </div>\n      </div>\n      <div id=\"tab2\" class=\"tab-pane fade\"> \n        <div class=\"row col-md-12\">&nbsp;</div>\n        <div class=\"row col-md-12\">\n        <p>This quick brown fox jumps over the lazy dog.</p>\n        </div>\n      </div> \n    </div>\n      \n    </fieldset>\n    </form> \n    </div>\n    </div>\n        {{_output1}}\n    </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], Frm001Component);
                return Frm001Component;
            }());
            exports_1("Frm001Component", Frm001Component);
        }
    }
});
//# sourceMappingURL=frm001.component.js.map