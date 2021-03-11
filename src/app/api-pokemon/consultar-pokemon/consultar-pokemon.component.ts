import { Component }  from '@angular/core';
import { ApiService } from './consultar-pokemon-api';
import { Pokemon }    from '../class/Pokemon';
import { Sprite }    from '../class/Sprite';
import { Abilities }    from '../class/Abilities';
import { Ability }    from '../class/Ability';

@Component({
  selector: 'consultar-pokemon',
  templateUrl: './consultar-pokemon.component.html',
  styleUrls: ['./consultar-pokemon.component.css']
})
  
export class ConsultarPokemonComponent{

  constructor(private apiService: ApiService) { }

  public sprite : Sprite = <Sprite>{    
    back_default: "",
    front_default: ""
  }; 

  public ability : Ability = <Ability>{    
    name: "",
    url: ""
  };  
  
  public abilities : Abilities = <Abilities>{    
    ability: this.ability
  };  
  
  public pokemon : Pokemon = <Pokemon>{    
    name: "",
    sprites: this.sprite,
    abilities: [this.abilities]
  };  

  public nome: string = "";

  pesquisar(event: any): void {    
    this.nome = event.target.value;
    this.apiService.ConsultarPokemon(this.nome.toLowerCase())
    .subscribe(
      _pokemon => {
        this.pokemon = _pokemon;
      },
      error => console.log(error)
    )
  }
}
