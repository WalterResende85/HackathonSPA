import { CandidatoService } from './../candidato.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {
  candidato: any;
  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.candidato={};
  }
  salvar(formCandidato: FormGroup){
    this.candidatoService.salvar(this.candidato).subscribe();
  }


}
