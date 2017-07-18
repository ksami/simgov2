require("dotenv").config();

import SimController from "./SimController";

const sim = new SimController();
sim.start();