import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEstabelecimentoComentarioComponent } from '../../estabelecimento/modal-estabelecimento-comentario/modal-estabelecimento-comentario.component';

@Component({
  selector: 'app-item-estabelecimento',
  templateUrl: './item-estabelecimento.component.html',
  styleUrls: ['./item-estabelecimento.component.css']
})
export class ItemEstabelecimentoComponent implements OnInit {

  @Input() estabelecimento: any;
  @Output() estabelecimentoFoiSelecionado : EventEmitter<any> = new EventEmitter()
  @Input() modal: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  selecionarEstabelecimento() {
    const modalRef = this.modalService.open(ModalEstabelecimentoComentarioComponent);
    modalRef.componentInstance.estabelecimentoSelecionado = this.estabelecimento;
  }
}
