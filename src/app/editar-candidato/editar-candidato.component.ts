
import { CandidatoService } from './../candidato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from './editar-candidato.model';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.scss']
})
export class EditarCandidatoComponent implements OnInit {
  id: number;
  candidato: Candidato; 

  constructor(private CandidatoService: CandidatoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidato = new Candidato();
    this.id = this.route.snapshot.params['id'];
    this.buscar(this.id);
   
  }
  buscar(id: number) {
       return this.CandidatoService.buscar(this.id).subscribe(resposta => {
         this.candidato = resposta;        
    });
  }
  atualizar(id: number, candidato: Candidato){
     this.CandidatoService.atualizar(id, candidato).subscribe();
  }
}
