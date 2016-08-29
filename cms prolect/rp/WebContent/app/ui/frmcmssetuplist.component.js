System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', './pipecmssetup.component'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, pipecmssetup_component_1;
    var AppFrmCMSSetupList;
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
            function (pipecmssetup_component_1_1) {
                pipecmssetup_component_1 = pipecmssetup_component_1_1;
            }],
        execute: function() {
            // Application Specific
            AppFrmCMSSetupList = (function () {
                function AppFrmCMSSetupList(ics, _router, params, http) {
                    var _this = this;
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this._searchVal = "";
                    this._filter = "";
                    this._output = "";
                    this._merchantobj = { "merchantid": "", "name": "",
                        "data": [{ "srno": "1", "datatype": "01", "fieldcode": "01", "fielddesc": "", "fieldref": "", "refcode": "ref022", "lovref": "" }], "messagecode": "", "messagedesc": "" };
                    this._merchantobjlist = { "arr": [{ "merchantid": "", "name": "" }] };
                    this.subscription1 = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        console.log("goto login"); //this._router.navigate(['Login',, { p1: '*' }]);
                    // Application Specific 
                    this._filter = this._searchVal.trim();
                    if (params.get("cmd") != null && params.get("cmd") == "LIST") {
                        this.http.doGet(this.ics._apiurl + 'service001/getCMSMerchantExtraList').subscribe(function (response) {
                            if (response != null) {
                                if (response.cmsMerchantData != null) {
                                    if (!(response.cmsMerchantData instanceof Array)) {
                                        var m = [];
                                        m[0] = response.cmsMerchantData;
                                        response.cmsMerchantData = m;
                                    }
                                    _this._merchantobjlist.arr = response.cmsMerchantData;
                                }
                            }
                        }, function (error) { return alert(error); }, function () { });
                    }
                }
                AppFrmCMSSetupList.prototype.goto = function (merchantid) {
                    this._router.navigate(['FrmCMSSetup', , { cmd: "READ", p1: merchantid }]);
                };
                AppFrmCMSSetupList.prototype.goNew = function () {
                    this._router.navigate(['FrmCMSSetup', ,]);
                };
                AppFrmCMSSetupList = __decorate([
                    core_1.Component({
                        selector: 'cmssetup-list',
                        template: " \n   \n    <div  class=\"container\">\n      <div class=\"col-lg-12 \">\n        <form  class=\"form-horizontal\"> \n          <fieldset>\n           <div class=\"form-group\">\n              <legend>CMS Setup List</legend>\n             <button class=\"btn btn-primary col-md-1\" type=\"button\" (click)=\"goNew();\">New</button> \n              <div class=\"col-md-5\">\n             <div class=\"input-group\">                        \n                 <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"_searchVal\"   class=\"form-control input-md\">\n                 <span class=\"input-group-btn input-md\">\n\t               <button class=\"btn btn-primary input-md\" type=\"button\">\n\t               <span class=\"glyphicon glyphicon-search\"></span>Search\n\t               </button>\n\t               </span>                \n\t        </div> \n          </div>        \n       \n          </div>                       \n            <div class=\"form-group\">               \n                <table width=50% class=\"table table-hover table-bordered\">\n                    <thead>\n                    <tr></tr>\n                      <tr>                        \n                        <th align=\"center\">Merchant ID</th>\n                        <th align=\"center\">Merchant Name</th>                                           \n                      </tr>\n                    </thead>\n                    <tbody>\n                       <tr *ngFor=\"#obj of  _merchantobjlist.arr|PipeCMSSetup:_searchVal\">\n                       <td><a (click)=\"goto(obj.merchantid)\">{{obj.merchantid}}</a></td>                       \n                        <td>{{obj.name}}</td>                                         \n                      </tr> \n                    </tbody>                     \n                  </table>               \n             </div>\n          </fieldset>\n        </form>\n       </div>\n    </div>  \n   \n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService],
                        pipes: [pipecmssetup_component_1.PipeCMSSetup]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], AppFrmCMSSetupList);
                return AppFrmCMSSetupList;
            }());
            exports_1("AppFrmCMSSetupList", AppFrmCMSSetupList);
        }
    }
});
//# sourceMappingURL=frmcmssetuplist.component.js.map