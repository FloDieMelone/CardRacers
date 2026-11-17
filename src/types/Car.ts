import type { ICar } from "../models/ICar.ts";

export class Car implements ICar {
    id: number;
    ranking: string;
    name: string;
    top_speed: number;
    zero_to_hundred: number;
    cylinder: number;
    ccm: number;
    horsepower: number;

    constructor(
        id: number,
        ranking: string,
        name: string,
        top_speed: number,
        zero_to_hundred: number,
        cylinder: number,
        ccm: number,
        horsepower: number
    ) {
        this.id = id;
        this.ranking = ranking;
        this.name = name;
        this.top_speed = top_speed;
        this.zero_to_hundred = zero_to_hundred;
        this.cylinder = cylinder;
        this.ccm = ccm;
        this.horsepower = horsepower;
    }

    getStats() {
        return {
            top_speed: this.top_speed,
            zero_to_hundred: this.zero_to_hundred,
            cylinder: this.cylinder,
            ccm: this.ccm,
            horsepower: this.horsepower
        };
    }

    getValue(stat: keyof Pick<ICar, "top_speed" | "zero_to_hundred" | "cylinder" | "ccm" | "horsepower">): number {
        return this[stat];
    }

    compare(
        otherCar: Car,
        stat: keyof Pick<ICar, "top_speed" | "zero_to_hundred" | "cylinder" | "ccm" | "horsepower">
    ): number {
        return this.getValue(stat) - otherCar.getValue(stat);
    }

    toJSON(): ICar {
        return {
            id: this.id,
            ranking: this.ranking,
            name: this.name,
            top_speed: this.top_speed,
            zero_to_hundred: this.zero_to_hundred,
            cylinder: this.cylinder,
            ccm: this.ccm,
            horsepower: this.horsepower
        };
    }
}