import {v4} from "uuid";

export function getUuid(): string {
    return v4();
}

export function getRandomInt(max: number = 999999999): number {
    return Math.floor(Math.random() * Math.floor(max));
}