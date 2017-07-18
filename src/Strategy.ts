import {Process, State} from "./lib";
import Individual from "./Individual";

export default class Strategy {
    method: (state: State) => Process;  // based on current state, output function to mutate each Individual

    constructor(method: (state: State) => Process) {
        this.method = method;
    }
}