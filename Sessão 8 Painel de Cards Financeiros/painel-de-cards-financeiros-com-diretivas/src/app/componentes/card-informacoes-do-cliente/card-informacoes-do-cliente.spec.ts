import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInformacoesDoCliente } from './card-informacoes-do-cliente';

describe('CardInformacoesDoCliente', () => {
  let component: CardInformacoesDoCliente;
  let fixture: ComponentFixture<CardInformacoesDoCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInformacoesDoCliente],
    }).compileComponents();

    fixture = TestBed.createComponent(CardInformacoesDoCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
