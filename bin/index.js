"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var SimController_1 = require("./SimController");
var sim = new SimController_1.default();
sim.start();
