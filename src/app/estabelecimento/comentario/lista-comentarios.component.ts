import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../shared/models/comentario.model';
import { TomarUmaFacebookService } from '../../services/tomar-uma-facebook.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  listaComentarios: Comentario[] = [
    {comentario: 'Muito bom!!!!', usuario: 552706617},
    {comentario: 'Excelente!', usuario: 736674355}
  ];

  constructor(private tomarUmaService: TomarUmaFacebookService, private authService: AuthService) { 
    this.authService.getToken().then(token => {
      this.listaComentarios.forEach((comentario, indice, array) => {
        this.tomarUmaService.usuario(comentario.usuario, token)
          .then(info => {
            console.log("INFO", info);
            comentario.imagem = info.profile_pic;
            console.log(info.profile_pic)
            comentario.nomeUsuario = info.name;
          });
      });
      console.log(this.listaComentarios);
    });
  }

  ngOnInit() {
    
  }

}
