"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var d = debug("sim2:Individual");
var Individual = (function () {
    function Individual(network) {
        this._network = network;
        this.wealth = 0;
        this._network.on("update-work", this.onWork.bind(this));
    }
    Individual.prototype.onWork = function () {
        this.wealth++;
        d("wealth: ", this.wealth);
    };
    return Individual;
}());
exports.default = Individual;
