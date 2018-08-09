"use strict";
exports.__esModule = true;
var Gigasecond = /** @class */ (function () {
    function Gigasecond() {
    }
    Gigasecond.time = function (date) {
        var GS = new Date(date);
        GS.setMilliseconds(Math.pow(10, 9));
        return GS;
    };
    return Gigasecond;
}());
exports["default"] = Gigasecond;
test = new Gigasecond();
test.time(new Date(Date.UTC(2015, 8, 14)));
