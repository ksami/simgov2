import * as debug from "debug";

import Network from "./Network";

const d = debug("sim2:Individual");

export default class Individual {
    private _network: Network;
    wealth: number;

    constructor(network: Network) {
        this._network = network;
        this.wealth = 0;

        this._network.on("update-work", this.onWork.bind(this));
    }

    onWork(): void {
        this.wealth++;
        d("wealth: ", this.wealth);
    }
}