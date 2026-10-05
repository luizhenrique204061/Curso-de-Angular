import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoDeCredito } from './cartao-de-credito';

describe('CartaoDeCredito', () => {
  let component: CartaoDeCredito;
  let fixture: ComponentFixture<CartaoDeCredito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoDeCredito],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoDeCredito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
