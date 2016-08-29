System.register(['angular2/core', '../framework/rp-intercom.service', '../framework/rp-input.component', '../framework/rp-http.service', '../framework/rp-references', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, rp_intercom_service_1, rp_input_component_1, rp_http_service_1, rp_references_1, router_1;
    var FrmImageUpload;
    return {
        setters:[
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FrmImageUpload = (function () {
                function FrmImageUpload(ics, _router, params, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this.ref = ref;
                    // Application Specific
                    this._imgpath = "about:blank";
                }
                FrmImageUpload.prototype.loadImg = function (event) {
                    this._imgpath = URL.createObjectURL(event.target.files[0]);
                    var url = this.ics._apiurl + 'uploadservice/savePhoto?f=upload&fn=' + event.target.files[0].name;
                    var fd = new FormData();
                    var xhr = new XMLHttpRequest();
                    for (var i = 0; i < event.target.files.length; i++) {
                        fd.append("uploads[]", event.target.files[i], event.target.files[i].name);
                    }
                    xhr.open('POST', url, true);
                    xhr.send(fd);
                };
                FrmImageUpload.prototype.goClear = function () {
                    this._imgpath = "about:blank";
                };
                FrmImageUpload.prototype.goGet = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'uploadservice/getPhoto';
                    this.http.doGet(url).subscribe(function (data) {
                        _this._imgpath = data.path;
                    }, function (error) { return alert(error); }, function () { });
                };
                FrmImageUpload = __decorate([
                    core_1.Component({
                        selector: 'upload',
                        template: " \n      <div class=\"container\">\n        <div class=\"row clearfix\"> \n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n                <form class=\"form-horizontal\" (ngSubmit)=\"goSave()\" >\n                <fieldset>  \n                <legend>Image Upload</legend>\n                    <img id=\"output\" [src]=\"_imgpath\" width=\"15%\" height=\"25%\"/>\n                    <span class=\"btn btn-primary\" onclick=\"$(this).parent().find('input[type=file]').click();\">Open\n                    </span>\n                    <input type=\"file\" accept=\"image/*\" (change)=\"loadImg($event)\" style=\"display: none;\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goClear()\">Clear</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goGet()\">Get</button>\n                </fieldset>\n                </form>\n             </div>\n          </div>\n      </div>\n           ",
                        directives: [rp_input_component_1.RpInputComponent],
                        providers: [rp_http_service_1.RpHttpService]
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.RouteParams, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmImageUpload);
                return FrmImageUpload;
            }());
            exports_1("FrmImageUpload", FrmImageUpload);
        }
    }
});
//# sourceMappingURL=imageUpload.js.map