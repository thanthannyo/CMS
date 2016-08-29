System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Pipe001;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Tell Angular2 we're creating a Pipe with TypeScript decorators
            Pipe001 = (function () {
                function Pipe001() {
                }
                Pipe001.prototype.transform = function (value, args) {
                    var p1 = args[0];
                    return value.filter(function (rec) {
                        return (rec.t1.startsWith(p1) || rec.t2.startsWith(p1) || rec.t3.startsWith(p1));
                    });
                };
                Pipe001 = __decorate([
                    core_1.Pipe({
                        name: 'Pipe001'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Pipe001);
                return Pipe001;
            }());
            exports_1("Pipe001", Pipe001);
        }
    }
});
//# sourceMappingURL=pipe001.js.map