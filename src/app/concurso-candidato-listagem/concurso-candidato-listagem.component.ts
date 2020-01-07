import { Component, OnInit } from '@angular/core';
import { ConcursoCandidatoService } from '../concurso-candidato.service';
import { ConcursoCandidato } from './concurso-candidato-listagem.model';


@Component({
  selector: 'app-concurso-candidato-listagem',
  templateUrl: './concurso-candidato-listagem.component.html',
  styleUrls: ['./concurso-candidato-listagem.component.scss']
})
export class ConcursoCandidatoListagemComponent implements OnInit {
  concursoCandidatos: Array<any>;
  concursoCandidato: ConcursoCandidato;
  constructor(private concursoCandidatoService: ConcursoCandidatoService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.concursoCandidatoService.listar().subscribe(dados=>{
      this.concursoCandidatos = dados;
    });
  }
}
