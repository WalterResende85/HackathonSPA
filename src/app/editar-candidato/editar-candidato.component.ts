
import { CandidatoService } from './../candidato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from './editar-candidato.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.scss']
})
export class EditarCandidatoComponent implements OnInit {
  idCandidato: number;
  candidato: Candidato; 

  constructor(private CandidatoService: CandidatoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.candidato = new Candidato();
    this.idCandidato = this.route.snapshot.params['idCandidato'];
    this.buscar(this.idCandidato);
   
  }
  
  buscar(idCandidato: number) {
       return this.CandidatoService.buscar(this.idCandidato).subscribe(resposta => {
         this.candidato = resposta;        
    });
  }

  atualizar(){
     this.CandidatoService.atualizar(this.candidato).subscribe(()=>this.router.navigate(['/candidatos']));
     ;
  }
}
