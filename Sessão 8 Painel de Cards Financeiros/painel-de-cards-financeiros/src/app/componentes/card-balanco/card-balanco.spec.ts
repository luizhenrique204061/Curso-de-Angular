import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBalanco } from './card-balanco';

describe('BalancoCard', () => {
  let component: CardBalanco;
  let fixture: ComponentFixture<CardBalanco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBalanco],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBalanco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
