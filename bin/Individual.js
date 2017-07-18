"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var d = debug("sim2:Individual");
var Individual = (function () {
    function Individual(network) {
        this._network = network;
        this._wealth = 0;
        this.salary = 12000;
        this._network.on("update-processes", this.onProcess.bind(this));
        this._network.on("update-work", this.onWork.bind(this));
    }
    Object.defineProperty(Individual.prototype, "wealth", {
        get: function () {
            return this._wealth;
        },
        enumerable: true,
        configurable: true
    });
    Individual.prototype.onWork = function () {
        var self = this;
        this._processes.forEach(function (p) { return p(self); });
        this._wealth += this.salary;
        d("wealth: ", this.wealth);
    };
    Individual.prototype.onProcess = function (processes) {
        this._processes = processes;
    };
    return Individual;
}());
exports.default = Individual;
