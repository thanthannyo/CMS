// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
System.register(['angular2/platform/browser', '../rp-root.component', 'angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, rp_root_component_1, core_1, router_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (rp_root_component_1_1) {
                rp_root_component_1 = rp_root_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(rp_root_component_1.RpRootComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, browser_1.Title, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=rp-main.js.map