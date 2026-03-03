import { Component, inject, signal } from '@angular/core';
import { Api } from '../../services/api.service';

@Component({
  selector: 'app-professores',
  imports: [],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores {
  professores = signal<Professores[]>([]);

  private professorService = inject(Api);

}
