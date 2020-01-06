import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './editar-candidato/editar-candidato.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  candidatosUrl = 'http://localhost:8080/candidatos'

  constructor(private http: HttpClient) { }

 public salvar(candidato: any) {
    return this.http.post(this.candidatosUrl, candidato);
  }

  public listar() {
    return this.http.get<any[]>(`${this.candidatosUrl}`);
  }

  public remover(idCandidato:number){
    return this.http.delete(`${this.candidatosUrl}/${idCandidato}`);
  }

  public buscar(idCandidato: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.candidatosUrl}/${idCandidato}`);
  }

  public atualizar(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.candidatosUrl}/${candidato.idCandidato}`, candidato);
  }
}
