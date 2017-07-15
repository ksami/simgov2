"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var d = debug("sim2:Network");
var Network = (function () {
    function Network(bus) {
        this._bus = bus;
    }
    Network.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        d.apply(void 0, ["emit: ", event].concat(args));
        (_a = this._bus).emit.apply(_a, [event].concat(args));
        var _a;
    };
    Network.prototype.on = function (event, cb) {
        d("on: ", event);
        this._bus.on(event, cb);
    };
    return Network;
}());
exports.default = Network;
