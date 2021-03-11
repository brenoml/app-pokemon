import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Pokemon }      from '../class/Pokemon';
import { Observable }  from 'rxjs';

@Injectable()
export class ApiService {     

  constructor(private http: HttpClient) {}     

  protected UrlService: string = "https://pokeapi.co/api/v2/";   

  headers = {
  };   

  ConsultarPokemon(nome: string) : Observable<Pokemon>{
    return this.http.get<Pokemon>(this.UrlService + "pokemon/" + nome,
    {headers : this.headers})
  }    
  ConsultarPokemons() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.UrlService + "pokemon/",
    {headers : this.headers})
  }    
}