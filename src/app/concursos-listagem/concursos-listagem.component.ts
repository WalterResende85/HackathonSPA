
import { Component, OnInit } from '@angular/core';
import { ConcursoService } from './../concurso.service';
import { Concurso } from '../editar-concurso/editar-concurso.model';

@Component({
  selector: 'app-concursos-listagem',
  templateUrl: './concursos-listagem.component.html',
  styleUrls: ['./concursos-listagem.component.scss']
})
export class ConcursosListagemComponent implements OnInit {
  concursos: Array<any>;
  constructor(private concursoService: ConcursoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.concursoService.listar().subscribe(dados => {
      this.concursos = dados;
    });
  }
  atualizar(idConcurso: number, concurso: Concurso){
    this.concursoService.atualizar(idConcurso, concurso).subscribe();
    
  }
  remover(idConcurso: number) {
    this.concursoService.remover(idConcurso).subscribe();
  }
}
