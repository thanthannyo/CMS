System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-http.service', '../framework/rp-input.component', '../util/rp-client.util'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_http_service_1, rp_input_component_1, rp_client_util_1;
    var FrmLovSetupComponent;
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
            function (rp_input_component_1_1) {
                rp_input_component_1 = rp_input_component_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            FrmLovSetupComponent = (function () {
                function FrmLovSetupComponent(ics, _router, params, http, l_util) {
                    // RP Framework
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.l_util = l_util;
                    // Application Specific 
                    //details
                    this._output1 = "";
                    this._lovsetupobj = { "lovNo": "TBA", "sysKey": "", "createdDate": "", "modiDate": "", "userID": "User1", "recStatus": "0", "lovDesc2": "", "data": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }], "messagecode": "", "messagedesc": "" };
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specifi
                    this.ics.confirmUpload(false);
                    this._lovsetupobj.createdDate = this.l_util.getTodayDate();
                    this._lovsetupobj.modiDate = this.l_util.getTodayDate();
                    if (params.get("cmd") != null && params.get("cmd") == "NEW") {
                        this._lovsetupobj.createdDate = this.l_util.getTodayDate();
                        this._lovsetupobj.modiDate = this.l_util.getTodayDate();
                    }
                    else if (params.get("cmd") != null && params.get("cmd") == "READ") {
                        var k = params.get("p1");
                        this._lovsetupobj = { "lovNo": k, "sysKey": "", "createdDate": "", "modiDate": "", "userID": "User1", "recStatus": "0", "lovDesc2": "", "data": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }], "messagecode": "", "messagedesc": "" };
                        this.goPostByLovNo(k);
                    }
                }
                FrmLovSetupComponent.prototype.goNew = function () {
                    this._lovsetupobj = { "lovNo": "TBA", "sysKey": "", "createdDate": "", "modiDate": "", "userID": "User1", "recStatus": "0", "lovDesc2": "", "data": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }], "messagecode": "", "messagedesc": "" };
                    this._lovsetupobj.createdDate = this.l_util.getTodayDate();
                    this._lovsetupobj.modiDate = this.l_util.getTodayDate();
                };
                FrmLovSetupComponent.prototype.goSave = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/savelovSetUp';
                    var json = this._lovsetupobj;
                    this.http.doPost(url, json).subscribe(function (data) {
                        _this._lovsetupobj = data;
                        _this._output1 = JSON.stringify(data);
                        console.log(_this._lovsetupobj.messagedesc);
                        if (_this._lovsetupobj.messagecode == "0000") {
                            _this.popupMessage(_this._lovsetupobj.messagedesc);
                        }
                        _this._lovsetupobj.lovNo = "TBA";
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmLovSetupComponent.prototype.goList = function () {
                    this._router.navigate(['MenuLovsetupList', , { cmd: "LIST" }]);
                };
                FrmLovSetupComponent.prototype.goPostByLovNo = function (k) {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/lovNobyID';
                    this._lovsetupobj.lovNo = k;
                    var json = this._lovsetupobj;
                    this.http.doPost(url, json).subscribe(function (res) {
                        _this._output1 = JSON.stringify(res);
                        console.log(_this._output1);
                        if (res != null) {
                            _this._lovsetupobj = res;
                            if (!(res.data instanceof Array)) {
                                var m = [];
                                m[0] = res.data;
                                _this._lovsetupobj.data = m;
                            }
                        }
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmLovSetupComponent.prototype.popupMessage = function (message) {
                    this.ics.sendBean({ "t1": "rp-msg", "t2": "Customer Information", "t3": message });
                };
                FrmLovSetupComponent.prototype.goRemove = function (p) {
                    var index = this._lovsetupobj.data.indexOf(p);
                    var length = this._lovsetupobj.data.length;
                    if (length < 2) {
                        this._lovsetupobj.data[0] = { srno: ("").toString(), lovCde: "", lovDesc1: "" };
                    }
                    else {
                        this._lovsetupobj.data.splice(index, 1);
                    }
                    for (var i = 0; i < length; i++) {
                        var maxsrno = i;
                        maxsrno = maxsrno + 1;
                        this._lovsetupobj.data[i].srno = (maxsrno).toString();
                    }
                };
                FrmLovSetupComponent.prototype.goAddLovsetup = function () {
                    if (this._lovsetupobj.data[0].srno == "") {
                        this._lovsetupobj.data[0].srno = "1";
                    }
                    var maxsrno = this._lovsetupobj.data.length;
                    maxsrno = maxsrno + 1;
                    this._lovsetupobj.data.push({ srno: (maxsrno).toString(), lovCde: "", lovDesc1: "" });
                };
                FrmLovSetupComponent = __decorate([
                    core_1.Component({
                        selector: 'frmlovsetup',
                        template: "\n<div class=\"container\" >\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\" (ngSubmit)=\"goSave()\" >\n      <fieldset>  \n      <legend>LOV SetUp Infromation</legend>\n       \n        <div class=\"form-group\"> \n          <div class=\"col-md-12\">\n              <button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"goNew()\">New</button>\n              <button type=\"submit\" class=\"btn btn-success btn-md\">Save</button>\n              <button type=\"button\" class=\"btn btn-info btn-md\" (click)=\"goList();\">List</button> \n          </div>\n        </div>          \n\n        <div class=\"form-group\">\n         <rp-input [(rpModel)]=\"_lovsetupobj.lovNo\" rpClass = \"col-md-2\" rpLabelClass = \"col-md-2 control-label\" rpType=\"text\" rpLabel=\"LOV No.\" rpPlaceHolder = \"TBA\" rpReadonly = \"true\">TBA</rp-input>         \n        </div>         \n        <div class=\"form-group\">\n          <rp-input rpRequired = \"true\" [(rpModel)]=\"_lovsetupobj.lovDesc2\" rpClass = \"col-md-2\" rpLabelClass = \"col-md-2 control-label\" rpType=\"text\" rpLabel=\"LOV Description\" ></rp-input>                            \n        </div>\n       \n       <div class=\"form-group\">\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-Info\" type=\"button\" (click)=\"goAddLovsetup()\">Add</button>\n          </div>\n       </div>\n       <div class=\"form-group\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th>Sr No.</th>\n                    <th>LOV Code</th>\n                    <th>LOV Description</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"#obj of _lovsetupobj.data\">\n                    <td class = \"col-md-1\">{{obj.srno}}</td>\n                    <td class = \"col-md-2\" >\n                       <rp-input rpRequired = \"true\" [(rpModel)]=\"obj.lovCde\" rpType=\"text\" rpLabelClass = \"col-md-0\" rpClass = \"col-md-0\"></rp-input>\n                    </td>\n                    <td class = \"col-md-2\">\n                       <rp-input rpRequired = \"true\" [(rpModel)]=\"obj.lovDesc1\" rpType=\"text\" rpLabelClass = \"col-md-0\" rpClass = \"col-md-0\"></rp-input>\n                    </td>\n\n                    <td>\n                        <button class=\"btn btn-Danger\"  type=\"button\" (click)=\"goRemove(obj)\" >X</button>\n                    </td>\n                  </tr> \n                </tbody>\n            </table>\n          </div>\n       </div>\n       </fieldset>\n       </form> \n       </div>\n       </div>\n    </div>",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService, rp_client_util_1.ClientUtil]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService, rp_client_util_1.ClientUtil])
                ], FrmLovSetupComponent);
                return FrmLovSetupComponent;
            }());
            exports_1("FrmLovSetupComponent", FrmLovSetupComponent);
        }
    }
});
//# sourceMappingURL=frmlovsetup.component.js.map