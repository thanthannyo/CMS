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
    var Frm002Component;
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
            Frm002Component = (function () {
                function Frm002Component(ics, _router, params, http) {
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
                }
                Frm002Component.prototype.rpt1 = function () {
                    var bean = new rp_bean_1.RpBean;
                    bean.t1 = "rp-popup";
                    bean.t2 = "RP Framework Popup View";
                    bean.t3 = this.ics._rpturl + "direct.jsp";
                    this.ics.sendBean(bean);
                };
                Frm002Component.prototype.rpt2 = function () {
                    var _this = this;
                    this.http.doGet(this.ics._rpturl + 'prepare.jsp?reportid=r007').subscribe(function (data) {
                        var bean = new rp_bean_1.RpBean;
                        bean.t1 = "rp-popup";
                        bean.t2 = "RP Framework Popup View";
                        bean.t3 = _this.ics._rpturl + "recall.jsp?sid=" + data.sid;
                        _this.ics.sendBean(bean);
                    }, function (error) { return alert(error); }, function () { });
                };
                Frm002Component.prototype.alt = function (p) {
                    alert(p);
                };
                Frm002Component.prototype.routerCanDeactivate = function (next, prev) {
                    return true;
                };
                Frm002Component = __decorate([
                    core_1.Component({
                        selector: 'frm002',
                        template: " \n              <div class=\"container\">\n              <div class=\"row clearfix\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n              <form class=\"form-horizontal\">\n              <fieldset>\n\n              <!-- Form Name -->\n              <legend>Form 002</legend>\n              <!-- Select Basic -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"selectbasic\">Select Basic</label>\n                <div class=\"col-md-10\">\n                  <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                    <option value=\"1\">Option one</option>\n                    <option value=\"2\">Option two</option>\n                    <option value=\"3\">Option three</option>\n                  </select>\n                </div>\n              </div> \n\n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"textinput\">Text Input</label>  \n                <div class=\"col-md-4\">\n                  <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\">\n                </div>\n\n\n              <!-- Multiple Radios (inline) -->\n\n                <label class=\"col-md-2 control-label\" for=\"radios\">Inline Radios</label>\n                <div class=\"col-md-4\"> \n                  <label class=\"radio-inline\" for=\"radios-0\">\n                    <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"1\" checked=\"checked\">\n                    Yes\n                  </label> \n                  <label class=\"radio-inline\" for=\"radios-1\">\n                    <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"2\">\n                    No\n                  </label> \n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"textinput\">Text Input 1</label>  \n                <div class=\"col-md-4\">\n                  <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\">\n                </div>\n                <label class=\"col-md-2 control-label\" for=\"textinput\">Text Input 2</label>  \n                <div class=\"col-md-4\">\n                  <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\">\n                </div>\n              </div>\n                \n                <!-- Textarea -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"textarea\">Text Area</label>\n                <div class=\"col-md-10\">                     \n                  <textarea class=\"form-control\" id=\"textarea\" name=\"textarea\">default text</textarea>\n                </div>\n              </div>\n\n              <!-- Button (Double) -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"button1id\"></label>\n                <div class=\"col-md-10\">\n                  <button  type=\"button\" id=\"button1id\" name=\"button1id\" class=\"btn btn-success\" (click)=\"alt('ok');\">Ok</button>\n                  <button  type=\"button\" id=\"button2id\" name=\"button2id\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n              </div>\n\n              </fieldset>\n              </form>\n                  </div>\n                  \n                </div>\n              </div>\n   ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], Frm002Component);
                return Frm002Component;
            }());
            exports_1("Frm002Component", Frm002Component);
        }
    }
});
//# sourceMappingURL=frm002.component.js.map