import { Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';
import { ConsultarPokemonComponent } from './api-pokemon/consultar-pokemon/consultar-pokemon.component'

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'ConsultarPokemon', component: ConsultarPokemonComponent},
    { path: 'consultarRepositorio/:login', component: HomeComponent, pathMatch: 'full'}
];