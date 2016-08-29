// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
System.register(['angular2/core', './rp-intercom.service', './rp-references'], function(exports_1, context_1) {
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
    var core_1, rp_intercom_service_1, rp_references_1;
    var RpInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            }],
        execute: function() {
            RpInputComponent = (function () {
                function RpInputComponent(ref, ics) {
                    this.ref = ref;
                    this.ics = ics;
                    this.rpModelChange = new core_1.EventEmitter();
                    this.rpTest = new core_1.EventEmitter();
                    if (this.rpId == null || this.rpId == "")
                        this.rpId = "myid";
                    if (this.rpLabelClass == null || this.rpLabelClass == "")
                        this.rpLabelClass = "col-md-2";
                    if (this.rpClass == null || this.rpClass == "")
                        this.rpClass = "col-md-4";
                    if (this.rpAutoComplete == null || this.rpAutoComplete == "")
                        this.rpAutoComplete = "off";
                }
                RpInputComponent.prototype.updateData = function (event) {
                    this.rpModel = event;
                    this.rpModelChange.emit(event);
                    if (this.rpModel == "123")
                        this.rpTest.emit();
                };
                RpInputComponent.prototype.hello = function () {
                    return "?";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabelClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabelStyle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpRequired", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpReadonly", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpAutoComplete", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpModel", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpModelChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpTest", void 0);
                RpInputComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-input',
                        template: "  \n    <label class=\"{{rpLabelClass}} control-label\" for=\"rpId\" >{{rpLabel}}</label>\n    \n    <div class=\"{{rpClass}}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired=='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" required autocomplete=\"{{rpAutoComplete}}\" >\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired!='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\"   autocomplete=\"{{rpAutoComplete}}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly=='true'&&(rpType=='text'||rpType=='number'||rpType=='date'||rpType=='email'||rpType=='tel'||rpType=='url')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" readonly  autocomplete=\"{{rpAutoComplete}}\">\n\n\n        <input id=\"{{rpId}}\" *ngIf=\"(rpType=='boolean'||rpType=='checkbox')&& rpReadonly!='true'\" class=\"form-control\" type=\"checkbox\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\"  >\n        <input id=\"{{rpId}}\" *ngIf=\"(rpType=='boolean'||rpType=='checkbox')&& rpReadonly=='true'\" class=\"form-control\" type=\"checkbox\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\"  >\n\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='gender'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov1.gender\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='gender'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov1.gender\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref001'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref001\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref001'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref001\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n         \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref002'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref002\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref002'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref002\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>          \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref003'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref003\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref003'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref003\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>        \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref004'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref004\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref004'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref004\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n          \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref005'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref005\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref005'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref005\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n                  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref006'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref006\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref006'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref006\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref007'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref007\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref007'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref007\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n                \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref008'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref008\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref008'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref008\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n          \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref009'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref009\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref009'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref009\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>   \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref014' && rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref014\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref014' && rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref014\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref016' && rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref016\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref016' && rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref016\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref020' && rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref020\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref020' && rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref020\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>   \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref021'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref021\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref021'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref021\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref022'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref022\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref022'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref022\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref023'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref023\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref023'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref023\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref024'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref024\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref024'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref024\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref025'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref025\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref025'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref025\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref026'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref026\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref026'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref026\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref027'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref027\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref027'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref027\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref028'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"#item of ref._lov3.ref028\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref028'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"#item of ref._lov3.ref028\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>   \n        \n           \n        \n    </div>\n    \n     \n    ",
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [rp_references_1.RpReferences, rp_intercom_service_1.RpIntercomService])
                ], RpInputComponent);
                return RpInputComponent;
            }());
            exports_1("RpInputComponent", RpInputComponent);
        }
    }
});
//# sourceMappingURL=rp-input.component.js.map