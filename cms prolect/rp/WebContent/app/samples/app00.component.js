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
    var App00Component;
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
            App00Component = (function () {
                // Application Specific 
                function App00Component(ics, _router, params, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['Login', , { p1: '*' }]);
                    // Application Specific 
                    this.ics.confirmUpload(false);
                }
                App00Component.prototype.localpopup = function () {
                    jQuery("#jbody").load('http://www.mit.com.mm');
                    jQuery("#jpopup").modal();
                };
                App00Component.prototype.rootpopup = function () {
                    var bean = new rp_bean_1.RpBean;
                    bean.t1 = "rp-popup";
                    bean.t2 = "RP Framework - Angular-Jasper Reporting ";
                    bean.t3 = this.ics._rpturl + "direct.jsp";
                    this.ics.sendBean(bean);
                };
                App00Component.prototype.routerCanDeactivate = function (next, prev) {
                    return true; //return confirm('Are you sure you want to leave?');
                };
                App00Component = __decorate([
                    core_1.Component({
                        selector: 'my-app00',
                        template: " \n  <div class=\"container col-md-12\">\n  <button class=\"btn btn-primary\"  data-toggle=\"modal\" data-target=\"#myModal1\">Popup Small</button>\n  <button class=\"btn btn-primary\"   (click)=\"localpopup()\" >RP Report</button>\n  <button class=\"btn btn-primary\"   (click)=\"rootpopup()\" >RP Report*</button>\n    <h2>Home</h2>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Tab 1</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab2\">Tab 2</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab3\">Tab 3</a></li> \n    </ul>\n\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane fade in active\">\n        <h3>Tab 1</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n      </div>\n      <div id=\"tab2\" class=\"tab-pane fade\">\n        <h3>Tab 2</h3>\n        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      </div>\n      <div id=\"tab3\" class=\"tab-pane fade\">\n        <h3>Tab 3</h3>\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\n      </div> \n    </div>\n  </div>\n\n<!-- Modal -->\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\"> \n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Modal Header</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Some text in the modal.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"jpopup\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">  \n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">RP Report</h4>\n      </div>\n      <div id=\"jbody\" class=\"modal-body\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n    ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService])
                ], App00Component);
                return App00Component;
            }());
            exports_1("App00Component", App00Component);
        }
    }
});
//# sourceMappingURL=app00.component.js.map