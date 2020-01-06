
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
  exibirModal : boolean = false;
  concurso: Concurso;

  constructor(private concursoService: ConcursoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.concursoService.listar().subscribe(dados => {
      this.concursos = dados;
    });
  }
  atualizar(idConcurso: number, concurso: Concurso) {
    this.concursoService.atualizar(idConcurso, concurso).subscribe();

  }
  remover() {
    this.concursoService.remover(this.concurso.idConcurso).subscribe(()=>{
      this.toggleModalExcluir(null);
      this.listar();
    });
  }
  toggleModalExcluir(concurso: Concurso) {
    
    this.concurso = concurso;
    console.log('aaaa');
   this.exibirModal = !this.exibirModal;
  }
}
