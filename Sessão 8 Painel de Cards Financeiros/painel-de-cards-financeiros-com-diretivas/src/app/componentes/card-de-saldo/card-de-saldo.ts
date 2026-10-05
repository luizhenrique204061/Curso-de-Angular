import { Component, Input } from '@angular/core';
import { BalancoFinanceiro } from '../../classes/BalancoFinanceiro';

@Component({
  selector: 'app-card-de-saldo',
  standalone: false,
  styleUrl: './card-de-saldo.scss',
  templateUrl: './card-de-saldo.html',
})
export class CardDeSaldo {
  @Input() dados?:BalancoFinanceiro
}