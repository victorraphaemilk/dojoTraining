import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estudantes } from './estudantes';

describe('Estudantes', () => {
  let component: Estudantes;
  let fixture: ComponentFixture<Estudantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudantes],
    }).compileComponents();

    fixture = TestBed.createComponent(Estudantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
