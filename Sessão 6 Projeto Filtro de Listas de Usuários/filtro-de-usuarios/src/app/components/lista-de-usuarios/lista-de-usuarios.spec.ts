import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeUsuarios } from './lista-de-usuarios';

describe('ListaDeUsuarios', () => {
  let component: ListaDeUsuarios;
  let fixture: ComponentFixture<ListaDeUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeUsuarios],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
