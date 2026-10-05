import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDeSaldo } from './card-de-saldo';

describe('BalancoCard', () => {
  let component: CardDeSaldo;
  let fixture: ComponentFixture<CardDeSaldo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDeSaldo],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDeSaldo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
