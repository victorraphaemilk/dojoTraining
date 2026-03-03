import { Component, inject, signal } from '@angular/core';
import { Api, Professor } from '../../services/api.service';

@Component({
  selector: 'app-professores',
  imports: [],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores {
  professores = signal<Professor[]>([]);

  private professorService = inject(Api);

  ngOnInit(): void {
    this.professorService.getProfessores().subscribe({
      next: (data) => {
        this.professores.set(data);
      },
    });
  }
}
