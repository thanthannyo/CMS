// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
System.register(['angular2/core', '../framework/rp-intercom.service'], function(exports_1, context_1) {
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
    var core_1, rp_intercom_service_1;
    var Lookup001;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            }],
        execute: function() {
            Lookup001 = (function () {
                function Lookup001(ics) {
                    this.ics = ics;
                    this.rpModelChange = new core_1.EventEmitter();
                    this.rpChanged = new core_1.EventEmitter();
                    if (this.rpId == null || this.rpId == "")
                        this.rpId = "myid";
                    if (this.rpLabelClass == null || this.rpLabelClass == "")
                        this.rpLabelClass = "col-md-2";
                    if (this.rpClass == null || this.rpClass == "")
                        this.rpClass = "col-md-3";
                }
                Lookup001.prototype.ngAfterContentInit = function () {
                    this.updateCaption();
                };
                Lookup001.prototype.updateCaption = function () {
                    if (this.rpModel == "001") {
                        this._caption = "Myanmar Information Technology Pte Ltd";
                        this.rpChanged.emit("Address 001");
                    }
                    else if (this.rpModel == "002") {
                        this._caption = "Nirvasoft Pte Ltd";
                        this.rpChanged.emit("Address 002");
                    }
                    else {
                        this._caption = "Others";
                        this.rpChanged.emit("Address Others");
                    }
                };
                Lookup001.prototype.lookup = function () {
                    this._objs = [
                        { "t1": "001", "t2": "MIT Company", "t3": "No. 1, Inya Road, Yangon" },
                        { "t1": "002", "t2": "NS Company", "t3": "No. 2, Kabaaye Road, Yangon" },
                        { "t1": "003", "t2": "MS XYZ", "t3": "No. 3, Pyay Road, Yangon" },
                        { "t1": "00-9-81", "t2": "Dr ABC", "t3": "No. 12, Inya Road, Yangon" },
                        { "t1": "00-9-82", "t2": "EFG", "t3": "No. 245, Kabaaye Road, Yangon" },
                        { "t1": "00-9-83", "t2": "XYZ", "t3": "No. 33413, Pyay Road, Yangon" }
                    ];
                    jQuery("#lu001popup").modal();
                };
                Lookup001.prototype.goto = function (p) {
                    jQuery("#lu001popup").modal('hide');
                    this.rpModel = p;
                    this.updateCaption();
                    this.rpModelChange.emit(this.rpModel);
                };
                Lookup001.prototype.readonly = function (e) {
                    return true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Lookup001.prototype, "rpId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Lookup001.prototype, "rpLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Lookup001.prototype, "rpClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Lookup001.prototype, "rpLabelClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Lookup001.prototype, "rpLabelStyle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Lookup001.prototype, "rpModel", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Lookup001.prototype, "rpModelChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Lookup001.prototype, "rpChanged", void 0);
                Lookup001 = __decorate([
                    core_1.Component({
                        selector: 'lookup-001',
                        template: "  \n    <label class=\"{{rpLabelClass}} control-label\" for=\"rpId\" >{{rpLabel}}</label>\n    \n    <div class=\"{{rpClass}}\"> \n    <input [ngModel]=\"_caption\" class=\"form-control\" (keydown)=\"readonly($event)\" (cut)=\"readonly($event)\" (paste)=\"readonly($event)\">\n    </div>\n    <button class=\"btn btn-info\"  type=\"button\"  (click)=\"lookup();\">&equiv;</button>\n     \n    <div id=\"lu001popup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"lu001popupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"lu001popuptitle\" class=\"modal-title\">Customer Look Up</h4>\n          </div> \n          <div id=\"lu001popupbody\" class=\"modal-body\"> \n        <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Address</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"#obj of _objs \">\n                <td><a (click)=\"goto(obj.t1)\">{{obj.t1}}</a></td>\n                <td>{{obj.t2}}</td>\n                <td>{{obj.t3}}</td>\n              </tr> \n            </tbody>\n          </table>  \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    ",
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService])
                ], Lookup001);
                return Lookup001;
            }());
            exports_1("Lookup001", Lookup001);
        }
    }
});
//# sourceMappingURL=lookup-001.component.js.map