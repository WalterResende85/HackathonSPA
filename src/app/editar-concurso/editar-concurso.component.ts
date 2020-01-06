import { Component, OnInit } from '@angular/core';
import { ConcursoService } from './../concurso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Concurso } from './editar-concurso.model';


@Component({
  selector: 'app-editar-concurso',
  templateUrl: './editar-concurso.component.html',
  styleUrls: ['./editar-concurso.component.scss']
})
export class EditarConcursoComponent implements OnInit {
  idConcurso: number;
  concurso: Concurso;
  constructor(private concursoService: ConcursoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.concurso = new Concurso();
    this.idConcurso = this.route.snapshot.params['idConcurso'];
    this.buscar(this.idConcurso);
  }
  buscar(id: number) {
    return this.concursoService.buscar(this.idConcurso).subscribe(resposta => {
     
      this.concurso = resposta;
    });
  }
  atualizar(idConcurso: number, concurso: Concurso) {
    this.concursoService.atualizar(idConcurso, concurso).subscribe();
    this.router.navigate(['/concursos']);
  }
}
