import { Component, inject, signal } from '@angular/core';
import { Api, Professor } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professores',
  imports: [CommonModule],
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
