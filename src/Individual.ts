import * as debug from "debug";

import {Process, State} from "./lib";
import Network from "./Network";

const d = debug("sim2:Individual");

export default class Individual {
    private _network: Network;
    private _processes: Process[];
    private _wealth: number;
    salary: number;


    constructor(network: Network) {
        this._network = network;
        this._wealth = 0;
        this.salary = 12000;

        this._network.on("update-processes", this.onProcess.bind(this));
        this._network.on("update-work", this.onWork.bind(this));
    }

    get wealth() {
        return this._wealth;
    }

    onWork(): void {
        let self = this;
        this._processes.forEach(p => p(self));
        this._wealth += this.salary;
        d("wealth: ", this.wealth);
    }

    onProcess(processes: Process[]): void {
        this._processes = processes;
    }
}