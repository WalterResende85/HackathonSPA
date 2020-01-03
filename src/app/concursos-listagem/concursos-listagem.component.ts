import { ConcursoService } from './../concurso.service';
import { Component, OnInit } from '@angular/core';

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
  remover(concurso){
    this.concursoService.remover(concurso).subscribe();
  }
}
