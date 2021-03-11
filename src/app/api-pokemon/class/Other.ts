import { OfficialArtwork } from './OfficialArtwork';

export class Other {

    constructor(private other: Other) {
        this["official-artwork"] = new OfficialArtwork("");
     }
    ["official-artwork"]: OfficialArtwork;
}