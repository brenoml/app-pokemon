import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-pokemon/consultar-pokemon/consultar-pokemon-api';
import { Pokemon }    from '../../api-pokemon/class/Pokemon';
import { Sprite }    from '../../api-pokemon/class/Sprite';
import { Abilities }    from '../../api-pokemon/class/Abilities';
import { Ability }    from '../../api-pokemon/class/Ability';
import { Types }    from '../../api-pokemon/class/Types';
import { Type }    from '../../api-pokemon/class/Type';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
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

  public type : Type = <Type>{    
    name: "",
    url: ""
  };  
  
  public types : Types = <Types>{    
    type: this.type
  };  
  
  public pokemon : Pokemon = <Pokemon>{    
    name: "",
    sprites: this.sprite,
    abilities: [this.abilities]
  };  

  public pokemons:       Pokemon[] = new Array();
  // public pokemons : Pokemon[] = new Array(20);

  public nome: string = "";

  async ngOnInit(): Promise<void> {
    this.pesquisarPokemon();
  }

  pesquisarAleatorio(): void {  
    this.limparPokemons();
    this.pesquisarPokemon();  
  }

  mostrarMais(): void {    
    this.pesquisarPokemon();
  }

  gerarNumeroAleatorio(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  limparPokemons() {
    while(this.pokemons.length > 0)
    {      
      this.pokemons.pop();
    }
  }

  pesquisarPokemon(){
    for (var _i = 1; _i < 11; _i++) {
      this.apiService.ConsultarPokemon(String(this.gerarNumeroAleatorio(1, 898)))
      .subscribe(
        _pokemon => {
          this.pokemons.push(_pokemon);
        },
        error => console.log(error)
      )
    }
  }

}
