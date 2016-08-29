// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var RpHttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RpHttpService = (function () {
                function RpHttpService(http) {
                    this.http = http;
                }
                RpHttpService.prototype.doGet = function (url) {
                    return this.http.get(url)
                        .map(function (res) { return res.json(); });
                };
                RpHttpService.prototype.doPost = function (url, j) {
                    var params = JSON.stringify(j);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(url, params, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RpHttpService.prototype.doPostUrlEncoded = function (url, j) {
                    var json = JSON.stringify(j);
                    var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post(url, params, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RpHttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RpHttpService);
                return RpHttpService;
            }());
            exports_1("RpHttpService", RpHttpService);
        }
    }
});
//# sourceMappingURL=rp-http.service.js.map