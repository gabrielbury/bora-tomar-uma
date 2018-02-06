import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from '../../shared/models/estabelecimento.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-estabelecimento-comentario',
  templateUrl: './modal-estabelecimento-comentario.component.html',
  styleUrls: ['./modal-estabelecimento-comentario.component.css']
})
export class ModalEstabelecimentoComentarioComponent implements OnInit {

  @Input() estabelecimentoSelecionado: Estabelecimento;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
