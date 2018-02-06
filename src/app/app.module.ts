import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { TomarUmaFacebookService } from './services/tomar-uma-facebook.service';
import { ListaEstabelecimentosComponent } from './lista-estabelecimentos/lista-estabelecimentos.component';
import { ItemEstabelecimentoComponent } from './lista-estabelecimentos/item-estabelecimento/item-estabelecimento.component';
import { DetalheEstabelecimentoComponent } from './estabelecimento/detalhe-estabelecimento/detalhe-estabelecimento.component';
import { ModalEstabelecimentoComentarioComponent } from './estabelecimento/modal-estabelecimento-comentario/modal-estabelecimento-comentario.component';

import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaEstabelecimentosComponent,
    ItemEstabelecimentoComponent,
    DetalheEstabelecimentoComponent,
    ModalEstabelecimentoComentarioComponent
  ],
  entryComponents: [ModalEstabelecimentoComentarioComponent],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    TomarUmaFacebookService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
