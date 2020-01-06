import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';
import { EditarCandidatoComponent } from "./editar-candidato/editar-candidato.component";
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'candidatos', component: CandidatosListagemComponent },
    { path: 'cadastrarCandidato', component: CandidatoFormComponent },
    { path: 'editarCandidato/:idCandidato', component: EditarCandidatoComponent },
    { path: 'concursos', component: ConcursosListagemComponent },
    { path: 'cadastrarConcurso', component: ConcursoFormComponent },
    { path: 'editarConcurso/:idConcurso', component: EditarConcursoComponent }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);