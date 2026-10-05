import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoDeDebito } from './cartao-de-debito';

describe('CartaoDeDebito', () => {
  let component: CartaoDeDebito;
  let fixture: ComponentFixture<CartaoDeDebito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoDeDebito],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoDeDebito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
