import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { rootRouterConfig } from './app-routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Shared/home/home.component';
import { ConsultarPokemonComponent } from './api-pokemon/consultar-pokemon/consultar-pokemon.component'
import { ApiService } from './api-pokemon/consultar-pokemon/consultar-pokemon-api';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ConsultarPokemonComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],  
  providers: [
    ApiService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
