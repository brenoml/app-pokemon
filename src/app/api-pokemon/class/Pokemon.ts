import { Sprite } from './Sprite';
import { Abilities } from './Abilities';
import { Types } from './Types';

export class Pokemon {

    constructor(private pokemon: Pokemon) { }
    name!: string;
    id!: string;
    sprites!: Sprite;
    abilities!: Abilities[];
    types!: Types[];
    height!: string;
    weight!: string; 
}