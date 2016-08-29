System.register(['angular2/core', 'angular2/router', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1;
    var App01Component;
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
            },
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            }],
        execute: function() {
            // Application Specific
            App01Component = (function () {
                function App01Component(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific
                    this._output1 = "";
                    this._obj = {
                        "syskey": "001",
                        "t1": "",
                        "t2": "",
                        "udf": [{ "label": "Email", "type": "email", "value": "asdf@asd.com" }, { "label": "UDF 2", "type": "gender", "value": "f" }, { "label": "UDF 3", "type": "ref001", "value": "g" },
                            { "label": "Married", "type": "checkbox", "value": true }, { "label": "UDF 5", "type": "text", "value": "?" }, { "label": "UDF 6", "type": "text", "value": "?" },
                            { "label": "UDF 7", "type": "date", "value": "?" }, { "label": "UDF 8", "type": "text", "value": "?" }, { "label": "UDF 9", "type": "gender", "value": "m" }
                        ]
                    };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific     
                }
                App01Component.prototype.goStringify = function () {
                    this._output1 = JSON.stringify(this._obj);
                };
                App01Component.prototype.goGet = function () {
                    var _this = this;
                    console.log("GET Method");
                    var url = this.ics._apiurl + 'service001/gete001';
                    this.http.doGet(url).subscribe(function (data) {
                        console.log("get replied");
                        _this._obj = data;
                        _this._output1 = JSON.stringify(_this._obj);
                    }, function (error) { return alert(error); }, function () { });
                };
                App01Component.prototype.goPost = function () {
                    var _this = this;
                    console.log("POST Method");
                    var url = this.ics._apiurl + 'service001/poste001';
                    this.http.doPost(url, this._obj).subscribe(function (data) {
                        console.log("get replied");
                        _this._obj = data;
                        _this._output1 = JSON.stringify(data);
                    }, function (error) { return alert(error); }, function () { });
                };
                App01Component = __decorate([
                    core_1.Component({
                        selector: 'my-app01',
                        template: "  \n    <div class=\"container col-md-12\">         \n    <form class=\"form-inline\" (ngSubmit)=\"goStringify()\"> \n        <div class=\"row\">    \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">   \n        <button  type=\"button\" class=\"btn btn-primary\" type=\"submit\"> Submit </button>  \n        <button  type=\"button\" class=\"btn btn-primary\"   type=\"submit\"> Stringify </button>  \n        <button  type=\"button\" class=\"btn btn-primary\" (click)=\"goGet()\" > Get </button> \n        <button  type=\"button\" class=\"btn btn-primary\" (click)=\"goPost()\" > Post </button>\n        </div> \n        </div> \n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">    \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <rp-input rpLabelStyle=\"width:50px;\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t1\"></rp-input> \n        </div> \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <rp-input rpLabelStyle=\"width:75px;\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t2\"></rp-input> \n        </div>  \n        </div> \n        <div class=\"row\">&nbsp;</div>__________________________________________________________________________\n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">    \n          <span *ngFor=\"#item of _obj.udf;#i=index;\" class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\" >            \n          <rp-input rpLabelStyle=\"width:100px;\" rpType=\"{{_obj.udf[i].type}}\" rpLabel=\"{{_obj.udf[i].label}}\" [(rpModel)]=\"_obj.udf[i].value\" rpRequired=\"{{_obj.udf[i].required}}\"></rp-input> \n          <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"(i+1) % 2==0\">&nbsp;</div>    \n          </span>  \n        </div>\n     </form>\n     \n     <br/><br/>\n     {{_output1}}\n     <br/><br/>\n     <ul>  <li  *ngFor=\"#item of _obj.udf\">{{item.value}}</li>   </ul>\n     </div>\n    ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], App01Component);
                return App01Component;
            }());
            exports_1("App01Component", App01Component);
        }
    }
});
//# sourceMappingURL=app01.component.js.map