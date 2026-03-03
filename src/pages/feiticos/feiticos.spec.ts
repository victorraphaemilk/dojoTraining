import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feiticos } from './feiticos';

describe('Feiticos', () => {
  let component: Feiticos;
  let fixture: ComponentFixture<Feiticos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feiticos],
    }).compileComponents();

    fixture = TestBed.createComponent(Feiticos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
