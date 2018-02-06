import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TomarUmaFacebookService } from '../services/tomar-uma-facebook.service';
import { Estabelecimento } from '../shared/models/estabelecimento.model';

@Component({
  selector: 'app-lista-estabelecimentos',
  templateUrl: './lista-estabelecimentos.component.html',
  styleUrls: ['./lista-estabelecimentos.component.css']
})
export class ListaEstabelecimentosComponent implements OnInit {

  accessToken: string = "";
  myCurrentPosition: any = {}
  locais :Estabelecimento[] = [];
  estabelecimentoSelecionado :Estabelecimento = new Estabelecimento();

  constructor(private authService: AuthService, private tomarUmaService: TomarUmaFacebookService) {
    
    navigator.geolocation.getCurrentPosition(pos => {
      this.setPosition(pos);
      this.setUp();
    });

  }

  setUp() {
    this.authService.getToken()
      .then(token => {
        this.accessToken = token;
        this.searchPlace();
      })
      .catch((error: any) => console.error(error));
  }

  searchPlace() {
    this.tomarUmaService.buscar(this.myCurrentPosition.latitude, this.myCurrentPosition.longitude, this.accessToken)
      .then(dados => {
        dados.forEach(local => {

          this.locais.push({
            nome: local.name,
            capa: local.cover != null ? local.cover.source : '',
            checkins: local.checkins,
            descricao: local.description != null ? local.description : '',
            endereco: local.location != null ? local.location.street : '',
            id: local.id,
            imagem: local.picture.data.url
          });

        })
      })
      .catch(response =>{
        if(response.type === "OAuthException") {
          this.authService.clearToken();
          this.setUp();
        }
      })
  }

  setPosition(position){
    this.myCurrentPosition.latitude = position.coords.latitude;
    this.myCurrentPosition.longitude = position.coords.longitude;
  }

  ngOnInit() {
  }
  
  selecionarEstabelecimento(dados) {
    console.log(dados);
  }
}
