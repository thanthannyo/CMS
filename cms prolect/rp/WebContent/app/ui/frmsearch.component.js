System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', '../framework/rp-bean'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, rp_bean_1;
    var FrmSearchComponent;
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
            function (rp_bean_1_1) {
                rp_bean_1 = rp_bean_1_1;
            }],
        execute: function() {
            // Application Specific
            FrmSearchComponent = (function () {
                function FrmSearchComponent(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific 
                    this._obj = { "t1": "00-9-81", "t2": "Dr TTT", "t3": "No. 12, Inya Road, Yangon" };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                    if (params.get("cmd") != null)
                        this._obj.t1 = (params.get("cmd"));
                }
                FrmSearchComponent.prototype.popup = function () {
                    var bean = new rp_bean_1.RpBean;
                    bean.t1 = "rp-popup";
                    bean.t2 = "RP Framework Popup View";
                    bean.t3 = this.ics._rpturl + "direct.jsp";
                    this.ics.sendBean(bean);
                };
                FrmSearchComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                FrmSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'frmsearch',
                        template: " \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\">\n      <fieldset>  \n      <legend>Command Center / Search Results </legend>\n      \n      \n      <div class=\"form-group\"> \n      <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\"   (click)=\"alt('Primary')\" >Primary</button>\n      <button class=\"btn btn-success\"   (click)=\"alt('Success')\" >Success</button>    \n      </div>\n      </div>\n      \n      <div class=\"form-group\">\n      <rp-input rpId=\"id1\" rpType=\"text\" rpLabel=\"Customer ID\" [(rpModel)]=\"_obj.t1\"></rp-input> \n      <rp-input rpId=\"id2\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t2\"></rp-input> \n      </div>\n      <div class=\"form-group\">\n      <rp-input rpId=\"id3\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-5\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t3\"></rp-input> \n      <rp-input rpId=\"id4\" rpLabelClass=\"col-md-1\" rpClass=\"col-md-4\" rpType=\"ref001\" rpLabel=\"Sex\" [(rpModel)]=\"_obj.t3\"></rp-input> \n      </div>\n    \n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">General</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab2\">Others</a></li> \n    </ul>\n    <div class=\"form-group\"></div>\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane fade in active\">\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id5\"  rpType=\"text\" rpLabel=\"Field 1*\" [(rpModel)]=\"_obj.t1\"></rp-input> \n          <rp-input rpId=\"id6\"  rpType=\"text\" rpLabel=\"Field 2\" [(rpModel)]=\"_obj.t2\"></rp-input>  \n          </div>\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id7\"  rpClass=\"col-md-10\" rpType=\"text\" rpLabel=\"Field 3\" [(rpModel)]=\"_obj.t3\"></rp-input> \n          </div> \n      </div>\n      <div id=\"tab2\" class=\"tab-pane fade\">  \n        <p>This quick brown fox jumps over the lazy dog.</p> \n      </div> \n    </div>\n    \n      <div class=\"form-group\">\n      <label class=\"col-md-2 control-label\"></label>\n      <div class=\"col-md-9\"> \n      <button class=\"btn btn-default\"   (click)=\"rpt1()\" >Rpt 1</button>\n      <button class=\"btn btn-default\"   (click)=\"rpt2()\" >Rpt 2</button>\n      </div>\n      </div>\n  \n    </fieldset>\n    </form> \n    </div>\n    </div>\n    </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], FrmSearchComponent);
                return FrmSearchComponent;
            }());
            exports_1("FrmSearchComponent", FrmSearchComponent);
        }
    }
});
//# sourceMappingURL=frmsearch.component.js.map