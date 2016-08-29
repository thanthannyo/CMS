System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', './pipe001'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, pipe001_1;
    var Frm001ListComponent;
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
            },
            function (pipe001_1_1) {
                pipe001_1 = pipe001_1_1;
            }],
        execute: function() {
            Frm001ListComponent = (function () {
                function Frm001ListComponent(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific
                    this._filter1 = "";
                    this._output1 = "";
                    this._objs = [
                        { "t1": "00-9-81", "t2": "Mr ABC", "t3": "No. 1, Inya Road, Yangon" },
                        { "t1": "00-9-82", "t2": "Mrs EFG", "t3": "No. 2, Kabaaye Road, Yangon" },
                        { "t1": "00-9-83", "t2": "MS XYZ", "t3": "No. 3, Pyay Road, Yangon" },
                        { "t1": "00-9-81", "t2": "Dr ABC", "t3": "No. 12, Inya Road, Yangon" },
                        { "t1": "00-9-82", "t2": "EFG", "t3": "No. 245, Kabaaye Road, Yangon" },
                        { "t1": "00-9-83", "t2": "XYZ", "t3": "No. 33413, Pyay Road, Yangon" }
                    ];
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        console.log("goto login"); //this._router.navigate(['Login',, { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                }
                Frm001ListComponent.prototype.goto = function (p) {
                    this._router.navigate(['Menu01', , { cmd: "READ", p1: p }]);
                };
                Frm001ListComponent.prototype.goNew = function () {
                    this._router.navigate(['Menu01', , { cmd: "NEW" }]);
                };
                Frm001ListComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                Frm001ListComponent = __decorate([
                    core_1.Component({
                        selector: 'frm001-list',
                        template: " \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\">\n      <fieldset>  \n      <legend>Form 000</legend>  \n      <div class=\"form-group\">  \n      <div class=\"col-md-12\">\n        <button class=\"btn btn-primary col-md-1\" type=\"button\" (click)=\"goNew();\">New</button> \n      </div>\n      </div>\n      <div class=\"form-group\"> \n        <rp-input rpId=\"id1\" class=\"col-md-6\" rpType=\"text\" rpLabel=\"Filter\" [(rpModel)]=\"_filter1\"></rp-input> \n      </div>\n      </fieldset>\n      </form> \n        \n    <div class=\"row col-md-12\">&nbsp;</div> \n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Address</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"#obj of _objs | Pipe001:_filter1\">\n        <td><a (click)=\"goto(obj.t1)\">{{obj.t1}}</a></td>\n        <td>{{obj.t2}}</td>\n        <td>{{obj.t3}}</td>\n      </tr> \n    </tbody>\n  </table> \n  \n  \n\n    </div>\n    </div>\n    </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService],
                        pipes: [pipe001_1.Pipe001]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], Frm001ListComponent);
                return Frm001ListComponent;
            }());
            exports_1("Frm001ListComponent", Frm001ListComponent);
        }
    }
});
//# sourceMappingURL=frm001-list.component.js.map