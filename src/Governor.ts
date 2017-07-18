import * as debug from "debug";

import {Process, State} from "./lib";

import Network from "./Network";
import Individual from "./Individual";
import Strategy from "./Strategy";

const d = debug("sim2:Governor");

export default class Governor {
    private _network: Network;
    private _state: State;
    private _strategies: Strategy[];
    private _processes: Process[];

    constructor(network: Network, strategies: Strategy[]) {
        this._network = network;
        this._strategies = strategies;
        this._state = {
            lifeTime: 0,
            individuals: []
        };
        this._state.individuals.push(new Individual(network));

        network.on("tick", this.onTick.bind(this));
    }

    onTick() {
        d("onTick");
        this._state.lifeTime++;

        this.updateProcesses();
        this._network.emit("update-processes", this._processes);

        this._network.emit("update-work");
    }

    updateProcesses() {
        let self = this;
        this._processes = [];
        this._strategies.forEach(strat => self._processes.push(strat.method(self._state)));
    }
}