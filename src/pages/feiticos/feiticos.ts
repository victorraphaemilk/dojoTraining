import { Component, inject, signal } from '@angular/core';
import { Api, Feitico } from '../../services/api.service';

@Component({
  selector: 'app-feiticos',
  imports: [],
  templateUrl: './feiticos.html',
  styleUrl: './feiticos.scss',
})
export class Feiticos {
  feiticos = signal<Feitico[]>([]);

  private feiticoService = inject(Api);

  ngOnInit(): void {
    this.feiticoService.getFeiticos().subscribe({
      next: (data) => {
        this.feiticos.set(data);
      },
    });
  }
}
