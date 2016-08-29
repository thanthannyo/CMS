System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', '../framework/rp-references'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, rp_references_1;
    var AppFrmCMSSetup;
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
            }],
        execute: function() {
            // Application Specifi
            AppFrmCMSSetup = (function () {
                function AppFrmCMSSetup(ics, _router, params, http, ref, element) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.ref = ref;
                    this.element = element;
                    // RP Framework 
                    // Application Specific 
                    this._timer = 0;
                    this._note = "";
                    this._merchantobj = { "merchantid": "", "name": "",
                        "data": [{ "srno": "1", "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "", "readonly": "false" }], "messagecode": "", "messagedesc": "" };
                    this._lovobj = { "lovNo": "", "sysKey": "", "createdDate": "", "modiDate": "", "userID": "", "recStatus": "", "lovDesc2": "", "messagecode": "", "messagedesc": "",
                        "data": [{ "lov": "", "lovCde": "", "lovDesc1": "" }]
                    };
                    this._list = { "arr": [{ "merchantid": "", "name": "" }] };
                    this._header = { "merchantid": "", "name": "" };
                    // RP Framework
                    //this._all.openingdate = this._util.getTodayDate();    
                    this.getLoadLOV();
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                    if (params.get("cmd") != null && params.get("cmd") == "NEW") {
                    }
                    else if (params.get("cmd") != null && params.get("cmd") == "READ") {
                        var k = params.get("p1");
                        this.getCMSMerchantExtraCaptionByID(k);
                    }
                }
                AppFrmCMSSetup.prototype.goShow = function () {
                    this.ics.sendBean({ "t1": "rp-alert-success", "t2": "Saved Successfully." });
                };
                AppFrmCMSSetup.prototype.changeListner = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var contents = e.target;
                        image.src = contents.result;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                };
                AppFrmCMSSetup.prototype.goNew = function () {
                    this._merchantobj = { "merchantid": "", "name": "",
                        "data": [{ "srno": "1", "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "", "readonly": "" }], "messagecode": "", "messagedesc": "" };
                    this._lovobj = { "lovNo": "", "sysKey": "", "createdDate": "", "modiDate": "", "userID": "", "recStatus": "", "lovDesc2": "", "messagecode": "", "messagedesc": "",
                        "data": [{ "lov": "", "lovCde": "", "lovDesc1": "" }] };
                    this._header = { "merchantid": "", "name": "" };
                };
                AppFrmCMSSetup.prototype.goList = function () {
                    this._router.navigate(['FrmCMSSetupList', , { cmd: "LIST" }]);
                };
                AppFrmCMSSetup.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                AppFrmCMSSetup.prototype.alertMessage = function (message) {
                    this.ics.sendBean({ "t1": "rp-msg", t2: "Information", t3: message });
                };
                AppFrmCMSSetup.prototype.goSave = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/SaveCMSMerchantExtraSetup';
                    this._merchantobj.merchantid = this._header.merchantid;
                    this._merchantobj.name = this._header.name;
                    var json = this._merchantobj;
                    this.http.doPost(url, json).subscribe(function (data) {
                        _this._merchantobj = data;
                        if (_this._merchantobj.messagecode == "0000") {
                            _this.alertMessage(_this._merchantobj.messagedesc);
                        }
                        else {
                            _this.alertMessage(_this._merchantobj.messagedesc);
                        }
                        _this._merchantobj = { "merchantid": "", "name": "",
                            "data": [{ "srno": "1", "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "", "readonly": "" }], "messagecode": "", "messagedesc": "" };
                        _this._header = { "merchantid": "", "name": "" };
                    }, function (error) { return alert(error); }, function () { });
                };
                AppFrmCMSSetup.prototype.getCMSMerchantExtraCaptionByID = function (merchantid) {
                    var _this = this;
                    var url = this.ics._apiurl + 'service001/getCMSMerchantExtrBymerchantID';
                    // this._all.accno = accno;
                    this._merchantobj.merchantid = merchantid;
                    var json = this._merchantobj;
                    this.http.doPost(url, json).subscribe(function (data) {
                        if (data != null) {
                            _this._merchantobj = data;
                            _this._header.merchantid = _this._merchantobj.merchantid;
                            _this._header.name = _this._merchantobj.name;
                            if (!(data.data instanceof Array)) {
                                var m = [{ "srno": "1", "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "" }];
                                m[0] = data.data;
                            }
                        }
                    }, function (error) { return alert(error); }, function () { });
                };
                AppFrmCMSSetup.prototype.goAdd = function () {
                    if (this._merchantobj.data[0].srno == "") {
                        this._merchantobj.data[0].srno = "1";
                    }
                    var maxsrno = this._merchantobj.data.length;
                    maxsrno = maxsrno + 1;
                    this._merchantobj.data.push({ srno: (maxsrno).toString(), "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "", "readonly": "" });
                };
                AppFrmCMSSetup.prototype.callback = function (k) {
                    this._merchantobj.data.splice(k, 1);
                };
                AppFrmCMSSetup.prototype.goRemove = function (p) {
                    var index = this._merchantobj.data.indexOf(p);
                    var length = this._merchantobj.data.length;
                    if (length < 2) {
                        this._merchantobj.data[0] = { srno: ("").toString(), "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "", "readonly": "" };
                    }
                    else {
                        this._merchantobj.data.splice(index, 1);
                    }
                    for (var i = 0; i < length; i++) {
                        var maxsrno = i;
                        maxsrno = maxsrno + 1;
                        this._merchantobj.data[i].srno = (maxsrno).toString();
                    }
                };
                AppFrmCMSSetup.prototype.lookup = function () {
                    var _this = this;
                    if (this.ics._apiurl != "") {
                        this.http.doGet(this.ics._apiurl + 'service001/getCMSMerchantList').subscribe(function (data) {
                            _this._list.arr = data.cmsMerchantData;
                            if (data != null) {
                                if (data.cmsMerchantData != null) {
                                    if (!(data.cmsMerchantData instanceof Array)) {
                                        var m = [];
                                        m[0] = data.cmsMerchantData;
                                        data.cmsMerchantData = m;
                                    }
                                    _this._list.arr = data.cmsMerchantData;
                                }
                            }
                        }, function (error) { return alert(error); }, function () { });
                    }
                    jQuery("#lu001popup").modal();
                };
                AppFrmCMSSetup.prototype.goto = function (p) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'service001/getCMSMerchantByID?cmsMerchantID=' + p).subscribe(function (data) {
                        _this._header = data;
                        jQuery("#lu001popup").modal('hide');
                    }, function (error) { return alert(error); }, function () { });
                };
                AppFrmCMSSetup.prototype.callFieldCode = function (options, indexvalue) {
                    var indexresult = indexvalue.srno - 1;
                    var value = options[options.selectedIndex].value;
                    if (value == "01") {
                        //text 
                        this._merchantobj.data[indexresult].readonly = "false";
                        this._merchantobj.data[indexresult].refcode = "ref022";
                        this._merchantobj.data[indexresult].lovref = "";
                    }
                    else if (value == "02") {
                        //number
                        this._merchantobj.data[indexresult].readonly = "false";
                        this._merchantobj.data[indexresult].refcode = "ref023";
                        this._merchantobj.data[indexresult].lovref = "";
                    }
                    else if (value == "03") {
                        //date
                        this._merchantobj.data[indexresult].readonly = "false";
                        this._merchantobj.data[indexresult].refcode = "ref024";
                        this._merchantobj.data[indexresult].lovref = "";
                    }
                    else if (value == "04") {
                        //lov
                        this._merchantobj.data[indexresult].readonly = "true";
                        this._merchantobj.data[indexresult].refcode = "ref025";
                        this._merchantobj.data[indexresult].lovref = "ref028"; //lov
                    }
                    else if (value == "05") {
                        //bool
                        this._merchantobj.data[indexresult].readonly = "false";
                        this._merchantobj.data[indexresult].refcode = "ref026";
                        this._merchantobj.data[indexresult].lovref = "";
                    }
                    else if (value == "06") {
                        //image
                        this._merchantobj.data[indexresult].readonly = "false";
                        this._merchantobj.data[indexresult].refcode = "ref027";
                        this._merchantobj.data[indexresult].lovref = "";
                    }
                };
                AppFrmCMSSetup.prototype.getLoadLOV = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'service001/getLoadLOV').subscribe(function (data) {
                        if (data != null) {
                            if (data.ref004 != null) {
                                if (!(data.ref004 instanceof Array)) {
                                    var m = [];
                                    m[0] = data.ref004;
                                    _this.ref._lov3.ref028 = m;
                                }
                                else {
                                    _this.ref._lov3.ref028 = data.ref004;
                                }
                            }
                        }
                    }, function (error) { return alert(error); }, function () { });
                };
                //lovchangeevent
                AppFrmCMSSetup.prototype.changeEvent = function (options, tbindex) {
                    var _this = this;
                    var indexvalue = tbindex.srno - 1;
                    var text = options[options.selectedIndex].text;
                    this._lovobj.lovNo = text;
                    var url = this.ics._apiurl + 'service001/getLOVByLOVNo';
                    var json = this._lovobj;
                    this.http.doPost(url, json).subscribe(function (data) {
                        if (data != null) {
                            _this._merchantobj.data[indexvalue].fielddesc = data.lovDesc2;
                            _this._merchantobj.data[indexvalue].fieldref = options[options.selectedIndex].text;
                        }
                    }, function (error) { return alert(error); }, function () { });
                };
                AppFrmCMSSetup = __decorate([
                    core_1.Component({
                        selector: 'app-cmssetup',
                        template: " \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\" (ngSubmit)=\"goPost()\" >\n      <fieldset>  \n      <legend>CMS Setup</legend>\n       \n      <div class=\"form-group\"> \n      <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"goNew()\" >New</button>\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"goSave()\" >Save</button>      \n      <button class=\"btn btn-success\" type=\"button\" (click)=\"goList();\" >List</button>    \n      </div>\n      </div>     \n      <div class=\"form-group\"> \n       <rp-input [(rpModel)]=\"_header.merchantid\"  rpClass = \"col-md-3\" rpLabelClass = \"col-md-3 control-label\" rpType=\"text\" rpLabel=\"Merchant ID\"  rpReadonly = \"true\"></rp-input>\n      <!-- <button class=\"btn btn-info\" (click)=\"lookup(obj);\" >&equiv;</button>-->\n       <button class=\"btn btn-info\" (click)=\"lookup();\" >&equiv;</button>\n      </div>\n      <div class=\"form-group\">\n         <rp-input [(rpModel)]=\"_header.name\"  rpClass = \"col-md-3\" rpLabelClass = \"col-md-3 control-label\" rpType=\"text\" rpLabel=\"Merchant Name\"  rpReadonly = \"true\"></rp-input>\n      </div>\n     \n       <hr/>  \n       <div class=\"form-group\">\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-Info\" type=\"button\" (click)=\"goAdd()\">Add</button>\n          </div>\n       </div>                 \n         <div class=\"form-group\">\n          <div class=\"col-md-12\">\n          <form>\n            <table class=\"table table-striped\" id=\"myTable\">\n                <thead>\n                  <tr>\n                    <th>Sr No.</th>\n                    <th>Data Type</th>\n                    <th>Field Code</th>\n                    <th>Field Description </th>                   \n                    <th>Field Ref</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"#obj of _merchantobj.data\">\n                    <td class = \"col-md-1\">{{obj.srno}}</td>\n                    <td class = \"col-md-2\">\n                        <rp-input rpType=\"ref021\" rpClass = \"col-md-0\" [(rpModel)]=\"obj.datatype\" (change)=\"callFieldCode($event.target.options,obj)\"></rp-input>                     \n                    </td>\n                    <td class = \"col-md-2\">\n                         <rp-input rpType={{obj.refcode}} [(rpModel)]=\"obj.fieldcode\" rpClass = \"col-md-0\" (change)=\"changeEventFieldCode($event.target.options,obj)\"></rp-input>\n                    </td>     \n                     \n                    <td class = \"col-md-2\">\n                        <rp-input [(rpModel)]=\"obj.fielddesc\" rpRequired =true rpType=\"text\" rpLabelClass = \"col-md-0\" rpClass = \"col-md-0\" rpReadonly = {{obj.readonly}}></rp-input>\n                    </td> \n           \n                    <td class = \"col-md-2\">\n                         <rp-input rpType={{obj.lovref}} rpClass = \"col-md-0\" (change)=\"changeEvent($event.target.options,obj)\" [(rpModel)]=\"obj.fieldref\"></rp-input>\n                    </td>                                     \n                    <td>\n                     <button class=\"btn btn-Danger\" type=\"button\" (click)=\"goRemove(obj)\">X</button>\n                    </td>\n                    <td></td>\n                  </tr> \n                </tbody>\n              </table>\n             </form>\n            </div>\n         </div>                      \n      </fieldset>\n      </form> \n      </div>      \n       \n    <div id=\"lu001popup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"lu001popupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"lu001popuptitle\" class=\"modal-title\">CMS Merchant Information</h4>\n          </div> \n          <div id=\"lu001popupbody\" class=\"modal-body\"> \n           <table class=\"table table-striped\">\n             <thead>\n              <tr>\n                <th>ID</th>\n                <th>Name</th>               \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"#obj of _list.arr \">\n                <td><a (click)=\"goto(obj.merchantid)\">{{obj.merchantid}}</a></td>\n                <td>{{obj.name}}</td>               \n              </tr> \n            </tbody>\n          </table>  \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, core_1.ElementRef])
                ], AppFrmCMSSetup);
                return AppFrmCMSSetup;
            }());
            exports_1("AppFrmCMSSetup", AppFrmCMSSetup);
        }
    }
});
//# sourceMappingURL=frmcmssetup.component.js.map