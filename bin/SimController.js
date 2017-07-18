"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var events_1 = require("events");
var Network_1 = require("./Network");
var Governor_1 = require("./Governor");
var Strategy_1 = require("./Strategy");
var d = debug("sim2:SimController");
var SimController = (function () {
    function SimController() {
        this.network = new Network_1.default(new events_1.EventEmitter());
        this.governor = new Governor_1.default(this.network, [new Strategy_1.default(function (state) {
                var inflation = 0.05;
                return function (indiv) {
                    if (state.lifeTime % 5 === 0) {
                        inflation += 0.01;
                    }
                    indiv.salary *= 1 + inflation;
                };
            })]);
    }
    SimController.prototype.start = function () {
        var self = this;
        var count = 0;
        setInterval(function () {
            d("year:", ++count);
            self.network.emit("tick");
        }, 1000);
    };
    return SimController;
}());
exports.default = SimController;
