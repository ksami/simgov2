"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var Individual_1 = require("./Individual");
var d = debug("sim2:Governor");
var Governor = (function () {
    function Governor(network, strategies) {
        this._network = network;
        this._strategies = strategies;
        this._state = {
            lifeTime: 0,
            individuals: []
        };
        this._state.individuals.push(new Individual_1.default(network));
        network.on("tick", this.onTick.bind(this));
    }
    Governor.prototype.onTick = function () {
        d("onTick");
        this._state.lifeTime++;
        this.updateProcesses();
        this._network.emit("update-processes", this._processes);
        this._network.emit("update-work");
    };
    Governor.prototype.updateProcesses = function () {
        var self = this;
        this._processes = [];
        this._strategies.forEach(function (strat) { return self._processes.push(strat.method(self._state)); });
    };
    return Governor;
}());
exports.default = Governor;
