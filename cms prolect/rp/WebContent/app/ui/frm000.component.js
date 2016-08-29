System.register(['angular2/router', 'angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', '../framework/rp-bean', './lookup-001.component'], function(exports_1, context_1) {
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
    var router_1, core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, rp_bean_1, lookup_001_component_1;
    var Frm000Component;
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
            },
            function (lookup_001_component_1_1) {
                lookup_001_component_1 = lookup_001_component_1_1;
            }],
        execute: function() {
            Frm000Component = (function () {
                function Frm000Component(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // Application Specific 
                    this._obj = { t1: "00-9-81", t2: "Dr TTT", t3a: "", t3: "f", t4: "YGN", t5: "USD", t6: "002", t7: "", t8: "2016-05-23" };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                }
                Frm000Component.prototype.rpt1 = function () {
                    var bean = new rp_bean_1.RpBean;
                    this.ics.sendBean({ "t1": "rp-popup", "t2": "RP Report", "t3": this.ics._rpturl + "direct.jsp" });
                };
                Frm000Component.prototype.rpt2 = function () {
                    var _this = this;
                    this.ics.sendBean({ "t1": "rp-msg", t2: "RP Report", t3: "Please wait ..." });
                    this.http.doGet(this.ics._rpturl + 'prepare.jsp?reportid=r007').subscribe(function (data) {
                        var url = _this.ics._rpturl + "recall.jsp?sid=" + data.sid;
                        console.log(url);
                        _this.ics.sendBean({ "t1": "rp-popup", "t2": "RP Report*", "t3": url });
                    }, function (error) {
                        _this.ics.sendBean({ "t1": "rp-msg", t2: "Server Error", t3: error });
                    }, function () { });
                };
                Frm000Component.prototype.msg = function () {
                    this.ics.sendBean({ "t1": "rp-msg", t2: "Warning", t3: "Posting Data" });
                };
                Frm000Component.prototype.alt = function (p) {
                    alert(p);
                };
                Frm000Component.prototype.debug = function () {
                    this.ics.sendBean({ "t1": "rp-msg", t2: "Debug", t3: JSON.stringify(this._obj) });
                };
                Frm000Component.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                Frm000Component.prototype.changed = function (p) {
                    this._obj.t7 = p;
                };
                Frm000Component = __decorate([
                    core_1.Component({
                        selector: 'frm000',
                        template: "     \n    \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\">\n      <fieldset>  \n      <legend>Form 000</legend>\n      \n      <div class=\"form-group\"> \n      <div class=\"col-md-12\">\n      <button class=\"btn btn-success\" type=\"button\"  (click)=\"alt('Primary')\" >Primary</button>\n      <button class=\"btn btn-success\" type=\"button\"  (click)=\"alt('Success')\" >Success</button> \n      <button class=\"btn btn-Danger\" type=\"button\"  (click)=\"alt('Danger')\" >Danger</button>\n      <button class=\"btn btn-Info\" type=\"button\"  (click)=\"debug()\" >Info</button>    \n      <button class=\"btn btn-Link\" type=\"button\"  (click)=\"alt('Link')\" >Link</button>    \n      </div>\n      </div>\n      \n      <div class=\"form-group\">\n      <rp-input rpId=\"id1\" rpType=\"text\" rpLabel=\"Customer ID\" [(rpModel)]=\"_obj.t1\"></rp-input> \n      <rp-input rpId=\"id2\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t2\" rpReadonly=\"true\"></rp-input> \n      </div>\n      <div class=\"form-group\">\n      <rp-input rpId=\"id3\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-5\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t3a\"  rpAutoComplete=\"on\"></rp-input> \n      <rp-input rpId=\"id4\" rpLabelClass=\"col-md-1\" rpClass=\"col-md-4\" rpType=\"gender\" rpLabel=\"Gender*\" [(rpModel)]=\"_obj.t3\" rpReadonly=\"true\"></rp-input> \n      </div>\n      <div class=\"form-group\">\n      <rp-input rpId=\"id5\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-5\" rpType=\"ref006\" rpLabel=\"City\" [(rpModel)]=\"_obj.t4\"></rp-input> \n      <rp-input rpId=\"id6\" rpLabelClass=\"col-md-1\" rpClass=\"col-md-4\" rpType=\"ref007\" rpLabel=\"Cur\" [(rpModel)]=\"_obj.t5\" ></rp-input> \n      </div>\n      <div class=\"form-group\">\n          <lookup-001 rpLabel=\"Customer\" rpClass=\"col-md-6\" [(rpModel)]=\"_obj.t6\" (rpChanged)=\"changed($event)\"></lookup-001>\n      </div>\n      <div class=\"form-group\">\n      <rp-input rpId=\"id5\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-6\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t7\"></rp-input> \n      </div> \n      <div class=\"form-group\">\n      <rp-input rpId=\"id5\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-6\" rpType=\"date\" rpLabel=\"DOB\" [(rpModel)]=\"_obj.t8\"></rp-input> \n      </div> \n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">General</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab2\">Others</a></li> \n    </ul>\n    <div class=\"form-group\"></div>\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane fade in active\">\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id5\"  rpType=\"text\" rpLabel=\"Field 1*\" [(rpModel)]=\"_obj.t1\"></rp-input> \n          <rp-input rpId=\"id6\"  rpType=\"text\" rpLabel=\"Field 2\" [(rpModel)]=\"_obj.t2\"></rp-input>  \n          </div>\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id7\"  rpClass=\"col-md-10\" rpType=\"text\" rpLabel=\"Field 3\" [(rpModel)]=\"_obj.t3\"></rp-input> \n          </div> \n      </div>\n      <div id=\"tab2\" class=\"tab-pane fade\">  \n        <p>This quick brown fox jumps over the lazy dog.</p> \n      </div> \n    </div>\n    \n          <div class=\"form-group\">\n      <label class=\"col-md-2 control-label\"></label>\n      <div class=\"col-md-9\"> \n      <button  type=\"button\" class=\"btn btn-default\"   (click)=\"rpt1()\" >Rpt 1</button>\n      <button  type=\"button\" class=\"btn btn-default\"   (click)=\"rpt2()\" >Rpt 2</button>\n      <button  type=\"button\" class=\"btn btn-default\"   (click)=\"msg()\" >Message</button>\n      </div>\n      </div>\n  \n    </fieldset>\n    </form> \n    </div>\n    </div>\n    </div>\n    \n   ",
                        directives: [rp_input_component_1.RpInputComponent, lookup_001_component_1.Lookup001],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], Frm000Component);
                return Frm000Component;
            }());
            exports_1("Frm000Component", Frm000Component);
        }
    }
});
//# sourceMappingURL=frm000.component.js.map