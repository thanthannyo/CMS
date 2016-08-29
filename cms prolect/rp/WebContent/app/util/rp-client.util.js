System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientUtil;
    return {
        setters:[],
        execute: function() {
            ClientUtil = (function () {
                function ClientUtil() {
                }
                //20160526 2:09pm YMK...
                ClientUtil.prototype.changeDatetoString = function (dt) {
                    var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
                    return dt.replace(datepattern, '$1$2$3');
                };
                ClientUtil.prototype.changeStringtoDate = function (dt) {
                    var pattern = /(\d{4})(\d{2})(\d{2})/;
                    return dt.replace(pattern, '$1-$2-$3');
                };
                ClientUtil.prototype.getTodayDate = function () {
                    var d = new Date();
                    var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
                    return datestring;
                };
                return ClientUtil;
            }());
            exports_1("ClientUtil", ClientUtil);
        }
    }
});
//# sourceMappingURL=rp-client.util.js.map