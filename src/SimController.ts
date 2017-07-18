import * as debug from "debug";
import {EventEmitter} from "events";

import {State} from "./lib";

import Network from "./Network";
import Individual from "./Individual";
import Governor from "./Governor";
import Strategy from "./Strategy";

const d = debug("sim2:SimController");

export default class SimController {
    network: Network;
    governor: Governor;

    constructor() {
        this.network = new Network(new EventEmitter());

        this.governor = new Governor(this.network, [new Strategy((state: State) => {
            let inflation = 0.05;

            return (indiv: Individual) => {
                if (state.lifeTime % 5 === 0) {
                    inflation += 0.01;
                }
                indiv.salary *= 1 + inflation;
            };
        })]);
    }

    start() {
        let self = this;
        let count = 0;
        setInterval(function() {
            d("year:", ++count);
            self.network.emit("tick");
        }, 1000);
    }
}