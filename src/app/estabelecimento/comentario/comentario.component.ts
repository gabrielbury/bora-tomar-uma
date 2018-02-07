import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Estabelecimento } from '../../shared/models/estabelecimento.model';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  comentario = new FormControl(null, [Validators.required, Validators.maxLength(300)]);

  @Input() estabelecimento : Estabelecimento;

  constructor() { }

  ngOnInit() {
  }

  salvar(){
    if(!this.comentario.valid){
      this.comentario.markAsTouched();
    }else{
      console.log(this.comentario.value)
    }
    
  }

}
