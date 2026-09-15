import { Component } from '@angular/core';
import { BalancoFinanceiro } from './classes/BalancoFinanceiro';
import Decimal from 'decimal.js';
import { ItemSaldo } from './classes/ItemSaldo';
import { Cliente } from './classes/Cliente';
import { CartaoDeCreditoModelo } from './classes/CartaoDeCreditoModelo';
import { CartaoDeDebitoModelo } from './classes/CartaoDeDebitoModelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  dadosSaldo = new BalancoFinanceiro(
    new Decimal(100.0),
    new Decimal(1000.0),
    new Decimal(1000.0),
    [
      new ItemSaldo('Conta Corrente', new Decimal(200.0)),
      new ItemSaldo('Conta e Saldos Vinculados', new Decimal(300.0)),
      new ItemSaldo('Conta Poupança e Saldos Vinculados', new Decimal(400.0)),
      new ItemSaldo('Investimentos Com Baixa Automática', new Decimal(500.0)),
      new ItemSaldo('Investimentos Sem Baixa Automática', new Decimal(500.0))
    ]
  );


  dadosCliente = new Cliente(
    'Clifford Devoe',
    24,
    new Decimal(1625.00),
    'Brasileiro'
  );


  dadosCartaoCredito = new CartaoDeCreditoModelo(
    '1234567891011',
    'CLIFFORD DEVOE',
    'MASTER CARD',
    new Decimal(1000.00),
    new Decimal(1200.00),
    new Decimal(2000.00),
    new Decimal(1300.00),
    new Decimal(3000.00)
  );


  dadosCartaoDebito?: CartaoDeDebitoModelo;

}