System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-references', '../framework/rp-http.service', '../framework/rp-input.component'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_references_1, rp_http_service_1, rp_input_component_1;
    var App02Component;
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
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            }],
        execute: function() {
            // Application Specific
            App02Component = (function () {
                function App02Component(ics, _router, params, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.ref = ref;
                    // Application Specific
                    this._output1 = "";
                    this._obj = {
                        "syskey": "001",
                        "t1": "",
                        "t2": "",
                        "udf": [{ "label": "Email", "type": "email", "value": "abc@efg.com" }, { "label": "UDF 2", "type": "gender", "value": "f" }, { "label": "UDF 3", "type": "ref001", "value": "3" },
                            { "label": "UDF 4", "type": "checkbox", "value": true }, { "label": "UDF 5", "type": "text", "value": "?" }, { "label": "UDF 6", "type": "text", "value": "?" },
                            { "label": "UDF 7", "type": "text", "value": "?" }, { "label": "UDF 8", "type": "text", "value": "?" }, { "label": "UDF 9", "type": "gender", "value": "m" }
                        ]
                    };
                    // RP Framework
                    this.subscription1 = ics.rpbean$.subscribe(function (x) { });
                    this._output1 = JSON.stringify(this.ics._profile);
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific     
                }
                App02Component.prototype.goStringify = function () {
                    this._output1 = JSON.stringify(this._obj);
                };
                App02Component.prototype.goGet = function () {
                    var _this = this;
                    console.log("GET Method");
                    var url = this.ics._apiurl + 'service001/gete001';
                    this.http.doGet(url).subscribe(function (data) {
                        console.log("get replied");
                        _this._obj = data;
                        _this._output1 = JSON.stringify(_this._obj);
                    }, function (error) { return alert(error); }, function () { });
                };
                App02Component.prototype.goPost = function () {
                    var _this = this;
                    console.log("POST Method");
                    var url = this.ics._apiurl + 'service001/poste001';
                    this.http.doPost(url, this._obj).subscribe(function (data) {
                        console.log("get replied");
                        _this._obj = data;
                        _this._output1 = JSON.stringify(data);
                    }, function (error) { return alert(error); }, function () { });
                };
                App02Component = __decorate([
                    core_1.Component({
                        selector: 'my-app02',
                        template: "   \n    <div class=\"container col-md-12\">        \n    <form class=\"form-inline\" (ngSubmit)=\"goStringify()\"> \n        <div class=\"row\">    \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">   \n        <button class=\"btn btn-primary\" type=\"submit\"> Submit </button>  \n        <button class=\"btn btn-primary\"   type=\"submit\"> Stringify </button>  \n        <button class=\"btn btn-primary\" (click)=\"goGet()\" > Get </button> \n        <button class=\"btn btn-primary\" (click)=\"goPost()\" > Post </button>\n        </div>\n        </div> \n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">    \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <rp-input rpLabelStyle=\"width:50px;\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t1\"></rp-input> \n        </div> \n        <div class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <rp-input rpLabelStyle=\"width:75px;\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t2\"></rp-input> \n        </div>  \n        </div> \n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">    \n          <span *ngFor=\"#item of _obj.udf;#i=index;\" class=\"form-group col-xs-6 col-sm-6 col-md-6 col-lg-6\" >            \n\n\n    <div class=\"form-group\">\n    <label  style=\"width:100px;\">{{_obj.udf[i].label}}</label>\n    <input *ngIf=\"_obj.udf[i].required=='true'&&(_obj.udf[i].type=='text'||_obj.udf[i].type=='date'||_obj.udf[i].type=='date'||_obj.udf[i].type=='email'||_obj.udf[i].type=='number'||_obj.udf[i].type=='tel'||_obj.udf[i].type=='url')\"  class=\"form-control\" type=\"{{_obj.udf[i].type}}\" [(ngModel)]=\"_obj.udf[i].value\"  required >\n    <input *ngIf=\"_obj.udf[i].required!='true'&&(_obj.udf[i].type=='text'||_obj.udf[i].type=='date'||_obj.udf[i].type=='email'||_obj.udf[i].type=='number'||_obj.udf[i].type=='tel'||_obj.udf[i].type=='url')\"  class=\"form-control\" type=\"{{_obj.udf[i].type}}\" [(ngModel)]=\"_obj.udf[i].value\"  >\n    <input *ngIf=\"_obj.udf[i].type=='boolean'||_obj.udf[i].type=='checkbox'\"  class=\"form-control\" type=\"checkbox\" [ngModel]=\"_obj.udf[i].value\" (ngModelChange)=\"updateData($event)\"  >\n    <select  *ngIf=\"_obj.udf[i].type=='gender'\"  [(ngModel)]=\"_obj.udf[i].value\"  class=\"form-control\">\n        <option *ngFor=\"#item of ref._lov1.gender\" value=\"{{item.value}}\" >{{item.caption}}</option>\n    </select> \n    <select  *ngIf=\"_obj.udf[i].type=='ref001'\"  [(ngModel)]=\"_obj.udf[i].value\"  class=\"form-control\">\n        <option *ngFor=\"#item of ref._lov3.ref001\" value=\"{{item.value}}\" >{{item.caption}}</option>\n    </select>     \n    </div>\n\n\n          <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"(i+1) % 2==0\">&nbsp;</div>    \n          </span>  \n        </div>\n     </form>\n     \n     <br/><br/>\n     {{_output1}}\n     <br/><br/>\n     <ul>  <li  *ngFor=\"#item of _obj.udf\">{{item.value}}</li>   </ul>\n    </div>\n    ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], App02Component);
                return App02Component;
            }());
            exports_1("App02Component", App02Component);
        }
    }
});
//# sourceMappingURL=app02.component.js.map