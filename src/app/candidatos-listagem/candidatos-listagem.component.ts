
import { Component, OnInit } from '@angular/core';

import { CandidatoService } from './../candidato.service';
import { Candidato } from '../editar-candidato/editar-candidato.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidatos-listagem',
  templateUrl: './candidatos-listagem.component.html',
  styleUrls: ['./candidatos-listagem.component.scss']
})
export class CandidatosListagemComponent implements OnInit {

  candidatos: Array<any>;
  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.listar();

  }

  listar() {
    this.candidatoService.listar().subscribe(dados => {
      this.candidatos = dados
    });
  }
  atualizar(id: number, candidato: Candidato) {
    this.candidatoService.atualizar(id, candidato).subscribe();

  }

  remover(idCandidato: number) {
    this.candidatoService.remover(idCandidato).subscribe();
    this.router.navigate(['/candidatos']);
  }


}
