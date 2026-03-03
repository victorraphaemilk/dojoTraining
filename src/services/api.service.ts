import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Professor {
  id: number;
  name: string;
  house: string;
  image: string;
  patronus: string;
}

export interface Aluno {
  id: number;
  name: string;
  house: string;
  image: string;
  patronus: string;
  ancestry: string;
}

export interface Feitico {
  id: string;
  name: string;
  description: string;
}



//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  private apiProfessores = 'https://hp-api.onrender.com/api/characters/staff';
  private apiAlunos = 'https://hp-api.onrender.com/api/characters/students';
  private apiFeiticos = 'https://hp-api.onrender.com/api/spells';

  getProfessores() {
    return this.http.get<Professor[]>(this.apiProfessores);
  }

  getAlunos() {
    return this.http.get<Aluno[]>(this.apiAlunos);
  }

  getFeiticos() {
    return this.http.get<Feitico[]>(this.apiFeiticos);
  }

} 
