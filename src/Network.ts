import * as debug from "debug";
import {EventEmitter} from "events";

import {EventType} from "./lib";

const d = debug("sim2:Network");

export default class Network {
    private _bus: EventEmitter;

    constructor(bus: EventEmitter) {
        this._bus = bus;
    }

    emit(event: EventType, ...args: any[]) {
        d("emit: ", event, ...args);
        this._bus.emit(event, ...args);
    }

    on(event: EventType, cb: (...args: any[]) => void) {
        d("on: ", event);
        this._bus.on(event, cb);
    }
}