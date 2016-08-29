System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-http.service', '../framework/rp-input.component', '../ui/pipemerchantentry.component'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_http_service_1, rp_input_component_1, pipemerchantentry_component_1;
    var FrmMerchantEntryListComponent;
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
            function (pipemerchantentry_component_1_1) {
                pipemerchantentry_component_1 = pipemerchantentry_component_1_1;
            }],
        execute: function() {
            // Application Specific
            FrmMerchantEntryListComponent = (function () {
                function FrmMerchantEntryListComponent(ics, _router, params, http) {
                    var _this = this;
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific 
                    this._filter1 = "";
                    this._output1 = "";
                    this._merchantlist = { "data": [{ "merchantID": "", "name": "" }] };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific
                    this.ics.confirmUpload(false);
                    if (params.get("cmd") != null && params.get("cmd") == "LIST") {
                        var json_1 = this._merchantlist;
                        this.http.doGet(this.ics._apiurl + 'service001/getcmsEntryList').subscribe(function (arr) {
                            json_1 = arr;
                            if (arr != null) {
                                if (arr.merchantListFormTable != null) {
                                    if (!(arr.merchantListFormTable instanceof Array)) {
                                        var m = [];
                                        m[0] = arr.merchantListFormTable;
                                        arr.merchantListFormTable = m;
                                    }
                                    _this._merchantlist.data = arr.merchantListFormTable;
                                }
                            }
                            _this._output1 = JSON.stringify(arr);
                        }, function (error) { return alert(error); }, function () { });
                    }
                }
                FrmMerchantEntryListComponent.prototype.goto = function (p) {
                    this._router.navigate(['Cmsentry', , { cmd: "READ", p1: p }]);
                };
                FrmMerchantEntryListComponent.prototype.goNew = function () {
                    this._router.navigate(['Cmsentry', , { cmd: "NEW" }]);
                };
                FrmMerchantEntryListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-frmlovsetup-list',
                        template: " <div class=\"container\">\n        <div class=\"row clearfix\"> \n          <div class=\"col-md-12 col-lg-10 column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\">\n            <form class=\"form-horizontal\">\n              <fieldset>  \n                <div class=\"form-group\"> \n                    <legend>Merchant List</legend>       \n                    <button class=\"btn btn-primary col-md-1\" type=\"button\" (click)=\"goNew();\">New</button> \n                    <rp-input rpId=\"id1\"  rpClass = \"col-md-4\" rpLabelClass = \"col-md-1 control-label\"  rpType=\"text\" rpLabel=\"Search\" [(rpModel)]=\"_filter1\"></rp-input> \n                </div>  \n                <div class=\"row col-md-12\">&nbsp;</div> \n                  <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>MerchantID</th>\n                            <th>Merchant Name</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#obj of _merchantlist.data|PipeCMSMerchantEntry:_filter1\">\n                            <td><a (click)=\"goto(obj.merchantID)\">{{obj.merchantID}}</a></td>\n                            <td>{{obj.name}}</td>\n                        </tr> \n                    </tbody>\n                  </table> \n              </fieldset>\n          </form> \n      </div>\n    </div>\n</div>\n  ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService,],
                        pipes: [pipemerchantentry_component_1.PipeCMSMerchantEntry]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], FrmMerchantEntryListComponent);
                return FrmMerchantEntryListComponent;
            }());
            exports_1("FrmMerchantEntryListComponent", FrmMerchantEntryListComponent);
        }
    }
});
//# sourceMappingURL=frmcmsmerchantentry-list.component.js.map