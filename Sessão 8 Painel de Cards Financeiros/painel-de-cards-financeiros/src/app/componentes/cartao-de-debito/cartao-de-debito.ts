import { Component, Input } from '@angular/core';
import { CartaoDeDebitoModelo } from '../../classes/CartaoDeDebitoModelo';

@Component({
  selector: 'app-cartao-de-debito',
  standalone: false,
  styleUrl: './cartao-de-debito.scss',
  templateUrl: './cartao-de-debito.html',
})
export class CartaoDeDebito {

  @Input() dados?: CartaoDeDebitoModelo;
}