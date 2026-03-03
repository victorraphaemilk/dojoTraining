import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Professores {
  id: number;
  nome: string;
  house: string;
  image: string;
  patronus: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  private api = 'https://hp-api.onrender.com/';

  getProfessores() {
    return this.http.get<Professores>;
  }
}
