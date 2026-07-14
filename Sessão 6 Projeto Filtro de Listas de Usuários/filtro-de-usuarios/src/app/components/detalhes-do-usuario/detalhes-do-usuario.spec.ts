import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDoUsuario } from './detalhes-do-usuario';

describe('DetalhesDoUsuario', () => {
  let component: DetalhesDoUsuario;
  let fixture: ComponentFixture<DetalhesDoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesDoUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesDoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
