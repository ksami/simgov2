require("dotenv").config();

import * as debug from "debug";
import {EventEmitter} from "events";

import Network from "./Network";
import Individual from "./Individual";
import Governor from "./Governor";

const d = debug("sim2:index");
const network = new Network(new EventEmitter());

let indivs = [];
indivs.push(new Individual(network));

setInterval(function() {
    d("setInterval tick");
    network.emit("update-work");
}, 1000);