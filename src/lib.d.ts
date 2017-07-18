import Individual from "./Individual";

export type EventType = "tick" | "update-work" | "update-processes";

export type State = {
    lifeTime: number;
    individuals: Individual[];
}

export type Process = (indiv: Individual) => void;