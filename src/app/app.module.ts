import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { TomarUmaFacebookService } from './services/tomar-uma-facebook.service';
import { ListaEstabelecimentosComponent } from './lista-estabelecimentos/lista-estabelecimentos.component';
import { ItemEstabelecimentoComponent } from './lista-estabelecimentos/item-estabelecimento/item-estabelecimento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaEstabelecimentosComponent,
    ItemEstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot()
  ],
  providers: [
    AuthService,
    TomarUmaFacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
