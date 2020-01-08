
import { Component, OnInit } from '@angular/core';
import { ConcursoService } from './../concurso.service';
import { Concurso } from '../editar-concurso/editar-concurso.model';
import { ConcursoCandidatoService } from '../concurso-candidato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concursos-listagem',
  templateUrl: './concursos-listagem.component.html',
  styleUrls: ['./concursos-listagem.component.scss']
})
export class ConcursosListagemComponent implements OnInit {
  concursos: Array<any>;
  exibirModal : boolean = false;
  concurso: Concurso;
  concursoCandidatos: Array<any>;
  constructor(private concursoService: ConcursoService, 
    private concursoCandidatoService: ConcursoCandidatoService,
    private router: Router) { }

  ngOnInit() {
    this.listar();
  }
  listarCandidatosPorConcurso(id: number) {
    this.router.navigate(['concursoCandidato',id])
  }
  listar() {
    this.concursoService.listar().subscribe(dados => {
      this.concursos = dados;
    });
  }
  atualizar(id: number, concurso: Concurso) {
    this.concursoService.atualizar(id, concurso).subscribe();

  }
  remover() {
    this.concursoService.remover(this.concurso.id).subscribe(()=>{
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
