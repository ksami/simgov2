"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var debug = require("debug");
var events_1 = require("events");
var Network_1 = require("./Network");
var Individual_1 = require("./Individual");
var d = debug("sim2:index");
var network = new Network_1.default(new events_1.EventEmitter());
var indivs = [];
indivs.push(new Individual_1.default(network));
setInterval(function () {
    d("setInterval tick");
    network.emit("update-work");
}, 1000);
