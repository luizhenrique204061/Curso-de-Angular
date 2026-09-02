import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalancoCard } from './balanco-card';

describe('BalancoCard', () => {
  let component: BalancoCard;
  let fixture: ComponentFixture<BalancoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalancoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BalancoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
