import { Component, Input } from '@angular/core';
import { Cliente } from '../../classes/Cliente';

@Component({
  selector: 'app-card-informacoes-do-cliente',
  standalone: false,
  styleUrl: './card-informacoes-do-cliente.scss',
  templateUrl: './card-informacoes-do-cliente.html',
})
export class CardInformacoesDoCliente {
  @Input() cliente?: Cliente;
}