import { Component, inject, signal } from '@angular/core';
import { Aluno, Api } from '../../services/api.service';

@Component({
  selector: 'app-estudantes',
  imports: [],
  templateUrl: './estudantes.html',
  styleUrl: './estudantes.scss',
})
export class Estudantes {
  estudantes = signal<Aluno[]>([]);

  private estudanteService = inject(Api);

  ngOnInit(): void {
    this.estudanteService.getAlunos().subscribe({
      next: (data) => {
        this.estudantes.set(data);
      },
    });
  }
}