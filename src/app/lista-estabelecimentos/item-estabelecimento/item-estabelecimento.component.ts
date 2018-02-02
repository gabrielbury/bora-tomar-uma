import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-estabelecimento',
  templateUrl: './item-estabelecimento.component.html',
  styleUrls: ['./item-estabelecimento.component.css']
})
export class ItemEstabelecimentoComponent implements OnInit {

  @Input() estabelecimento: any;

  constructor() { }

  ngOnInit() {
  }

}
