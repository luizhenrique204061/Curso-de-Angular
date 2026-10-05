import { Component, Input } from '@angular/core';
import { CartaoDeCreditoModelo } from '../../classes/CartaoDeCreditoModelo';

@Component({
  selector: 'app-cartao-de-credito',
  standalone: false,
  styleUrl: './cartao-de-credito.scss',
  templateUrl: './cartao-de-credito.html',
})
export class CartaoDeCredito {
  @Input() dados?: CartaoDeCreditoModelo;
}