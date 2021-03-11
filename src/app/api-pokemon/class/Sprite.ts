import { Other } from './Other';

export class Sprite {

    constructor(private sprite: Sprite) { 
        this.back_default = "";
        this.back_shiny = "";
        this.front_default = "";   
        this.front_shiny = ""
    }

    back_default: string;
    back_shiny: string
    front_default: string;
    front_shiny: string;
    other!: Other;

}