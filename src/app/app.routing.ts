import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';
import { EditarCandidatoComponent } from "./editar-candidato/editar-candidato.component";

const APP_ROUTES: Routes = [
{path:'', component: HomeComponent},
{path: 'candidatos', component: CandidatosListagemComponent},
{path: 'concursos',  component: ConcursosListagemComponent},
{path: 'cadastrarCandidato', component: CandidatoFormComponent},
{path: 'editarCandidato/:id', component: EditarCandidatoComponent},
{path: 'cadastrarConcurso', component: ConcursoFormComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);