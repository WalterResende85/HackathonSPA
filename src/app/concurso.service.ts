import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  concursoUrl = 'http://localhost:8080/concursos'

  constructor(private http: HttpClient) { }

  salvar(concurso){
    return this.http.post(this.concursoUrl, concurso);
  }

  listar() {
    return this.http.get<any[]>(`${this.concursoUrl}`);
  }
  remover(concurso){
    return this.http.delete(`${this.concursoUrl}/${concurso.id}`);
  }
  //atualizar()
}
