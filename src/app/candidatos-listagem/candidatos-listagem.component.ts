
import { Component, OnInit } from '@angular/core';

import { CandidatoService } from './../candidato.service';
@Component({
  selector: 'app-candidatos-listagem',
  templateUrl: './candidatos-listagem.component.html',
  styleUrls: ['./candidatos-listagem.component.scss']
})
export class CandidatosListagemComponent implements OnInit {

  candidatos: Array<any>;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.listar();

  }
 
  listar() {
    this.candidatoService.listar().subscribe(dados => {
      this.candidatos = dados
    });
  }
  remover(candidato){
this.candidatoService.remover(candidato).subscribe();
   
  }


}
