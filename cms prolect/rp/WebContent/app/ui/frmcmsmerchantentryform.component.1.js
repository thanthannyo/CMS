System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', '../framework/rp-references', '../util/rp-client.util'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, rp_references_1, rp_client_util_1;
    var FrmCMSMerchantEntryFormComponent;
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
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            // Application Specific
            FrmCMSMerchantEntryFormComponent = (function () {
                function FrmCMSMerchantEntryFormComponent(ics, _router, params, http, ref) {
                    // RP Framework
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.ref = ref;
                    // Application Specific
                    this._datatype = "REF020";
                    // isOn: "false";
                    this._note = "";
                    this._type = "";
                    this._isDisabled = true;
                    this._output1 = "";
                    this._list = { "arr": [{ "merchantID": "", "name": "" }] };
                    this._all = { "merchantID": "", "name": "", "messageCode": "", "messageDesc": "",
                        "fieldData": [{ "fieldCode": "", "fieldLabel": "", "fieldRef": "", "restType": "", "datatype": "", "fieldValue": "", "lovData": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }] }] };
                    this._all1 = { "merchantID": "", "name": "",
                        "fieldData": [{ "fieldCode": "", "fieldLabel": "", "fieldRef": "", "restType": "", "datatype": "", "fieldValue": "", "lovData": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }] }] };
                    this._status = "0";
                    this._util = new rp_client_util_1.ClientUtil();
                    this._title = "CMS Entry Form";
                    this._isFromList = "false";
                    this._IsAndroid = "";
                    this._classname = "";
                    this._message = "";
                    this._timer = 0;
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    this.ics._profile.role = 100;
                    // if  (!ics.getRole() || ics.getRole()==0 )     
                    //   this._router.navigate(['Login',, { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                    this._all = { "merchantID": "", "name": "", "messageCode": "", "messageDesc": "",
                        "fieldData": [{ "fieldCode": "", "fieldLabel": "", "fieldRef": "", "restType": "", "datatype": "", "fieldValue": "", "lovData": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }] }] };
                    if (params.get("cmd") != null && params.get("cmd") == "NEW") {
                    }
                    else if (params.get("cmd") != null && params.get("cmd") == "READ") {
                        this._isFromList = "true";
                        var k = params.get("p1");
                        console.log("Merchatn Id from list : " + k);
                        this._all = { "merchantID": k, "name": "", "messageCode": "", "messageDesc": "",
                            "fieldData": [{ "fieldCode": "", "fieldLabel": "", "fieldRef": "", "restType": "", "datatype": "", "fieldValue": "", "lovData": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }] }] };
                        this._title = "CMS Entry Form";
                        this.getCMSEntryByID(k);
                    }
                }
                FrmCMSMerchantEntryFormComponent.prototype.goSave = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/saveMerchant';
                    var json = this._all;
                    console.log("SAVE=" + JSON.stringify(this._all));
                    this.http.doPost(url, json).subscribe(function (data) {
                        _this._output1 = JSON.stringify(data);
                        if (data != null) {
                            _this._all = data;
                            if (_this._all.messageCode == "0000") {
                                _this._classname = "alert alert-success";
                                _this._timer = 2000;
                            }
                            else if (_this._all.messageCode == "0024") {
                                _this._classname = "alert alert-danger";
                                _this._timer = 5000;
                            }
                            _this.alertMessage(_this._all.messageDesc, _this._classname, _this._timer);
                        }
                        // jQuery("#myBtnSubmit").prop("disabled",false);
                        // jQuery("#myBtnPrint").prop("disabled",false);
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmCMSMerchantEntryFormComponent.prototype.lookup = function () {
                    var _this = this;
                    var json = this._list;
                    this.http.doGet(this.ics._apiurl + 'service001/getmerchantIDList').subscribe(function (data) {
                        _this._list.arr = data.merchantListFormTable;
                        if (data != null) {
                            if (data.merchantListFormTable != null) {
                                if (!(data.merchantListFormTable instanceof Array)) {
                                    var m = [];
                                    m[0] = data.merchantListFormTable;
                                    data.merchantListFormTable = m;
                                }
                                _this._list.arr = data.merchantListFormTable;
                            }
                        }
                    }, function (error) { return alert(error); }, function () { });
                    jQuery("#lu001popup").modal();
                };
                FrmCMSMerchantEntryFormComponent.prototype.goto = function (p) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'service001/getMerchantEntryByID?merchantID=' + p).subscribe(function (data) {
                        jQuery("#lu001popup").modal('hide');
                        _this._all = data;
                        console.log(JSON.stringify(_this._all));
                        _this._all1 = data;
                        //load lov
                        //this.ref._lov3.ref020 = this._all.fieldData.
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmCMSMerchantEntryFormComponent.prototype.getLovByMerchantID = function () {
                };
                FrmCMSMerchantEntryFormComponent.prototype.goList = function () {
                    this._router.navigate(['CMSEntryFormList', { cmd: "LIST" }]);
                };
                FrmCMSMerchantEntryFormComponent.prototype.goNew = function () {
                    this.ics.sendBean({ "t1": "rp-alert-success" });
                    this._all = { "merchantID": "", "name": "", "messageCode": "", "messageDesc": "",
                        "fieldData": [{ "fieldCode": "", "fieldLabel": "", "fieldRef": "", "restType": "", "datatype": "", "fieldValue": "", "lovData": [{ "srno": "1", "lovCde": "", "lovDesc1": "" }] }] };
                };
                FrmCMSMerchantEntryFormComponent.prototype.getCMSEntryByID = function (id) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'service001/getCMSEntryByID?merchantID=' + id).subscribe(function (data) {
                        _this._all = data;
                        _this._all1 = data;
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmCMSMerchantEntryFormComponent.prototype.alertMessage = function (message, classname, timer) {
                    this.ics.sendBean({ "t1": "rp-alert", "t2": message, "t3": classname, "n1": timer });
                };
                FrmCMSMerchantEntryFormComponent = __decorate([
                    core_1.Component({
                        selector: 'frmentry',
                        template: "\n    \n    <div class=\"container\" >\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\"  >\n      <fieldset>  \n      <legend>{{_title}}</legend>               \n      <div class=\"form-group\"> \n        <div class=\"col-md-12\">     \n           <button class=\"btn btn-primary\" type=\"button\" (click)=\"goNew();\">New</button> \n           <button class=\"btn btn-md btn-primary\" type=\"submit\" id=\"myBtnSave\" (click)=\"goSave();\">Save</button>  \n           <button class=\"btn btn-success\" type=\"button\" (click)=\"goList();\" >List</button>\n                     \n        </div>     \n      </div> \n      \n      <div class=\"form-group\">\n          <rp-input  rpClass = \"col-md-3\" rpLabelClass = \"col-md-3 control-label\" rpType=\"text\" rpLabel=\"Merchant ID\" [(rpModel)]=\"_all.merchantID\"></rp-input>\n          <button class=\"btn btn-info\" (click)=\"lookup();\" >&equiv;</button>\n      </div>\n      <div class=\"form-group\">\n          <rp-input rpClass = \"col-md-3\" rpLabelClass = \"col-md-3 control-label\" rpType=\"text\" rpLabel = \"Name\"   [(rpModel)]=\"_all.name\"></rp-input>                \n      </div>  \n      <div class=\"form-group\" >\n\t        \t<span *ngFor=\"#item of _all.fieldData;#i=index;\" >                  \n                <div class=\"col-md-12\" >{{_all.fieldData[i].fieldLabel}}</div>                                \n                 <rp-input rpId={{_all.fieldData[i].fieldCode}} rpClass = \"col-md-9\" rpLabelClass = \"col-md-1 control-label\" rpType=\"{{_all.fieldData[i].datatype}}\" rpLabel=\" \" [(rpModel)]=\"_all.fieldData[i].fieldValue\"></rp-input>\n            \n           <div *ngIf=\"_all.fieldData[i].datatype=='ref020'\">\n              <select [(ngModel)]=\"_all.fieldData[i].fieldValue\"  class=\"form-control\">\n                <option *ngFor=\"#item2 of item.lovData\" value=\"{{item2.lovCde}}\" >{{item2.lovDesc1}}</option>\n              </select> \n          </div>\n\t\t\t   <div class=\"form-group\"  >&nbsp;</div> \n\t\t    </span>\n\t\t</div>\n      \n       </fieldset>\n       </form> \n       </div>\n       </div>\n    </div> \n    \n     <div id=\"lu001popup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"lu001popupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"lu001popuptitle\" class=\"modal-title\">Merchant</h4>\n          </div> \n          <div id=\"lu001popupbody\" class=\"modal-body\"> \n           <table class=\"table table-striped\">\n             <thead>\n              <tr>\n                <th>Merchant ID</th>\n                <th>Name</th>               \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"#obj of _list.arr \">\n                <td><a (click)=\"goto(obj.merchantID)\">{{obj.merchantID}}</a></td>\n                <td>{{obj.name}}</td>               \n              </tr> \n            </tbody>\n          </table>  \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmCMSMerchantEntryFormComponent);
                return FrmCMSMerchantEntryFormComponent;
            }());
            exports_1("FrmCMSMerchantEntryFormComponent", FrmCMSMerchantEntryFormComponent);
        }
    }
});
//# sourceMappingURL=frmcmsmerchantentryform.component.1.js.map