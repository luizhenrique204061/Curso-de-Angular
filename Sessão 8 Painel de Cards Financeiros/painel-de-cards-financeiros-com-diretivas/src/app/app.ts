import { Component } from '@angular/core';
import { BalancoFinanceiro } from './classes/BalancoFinanceiro';
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
    100.0,
    1000.0,
    1000.0,
    [
      new ItemSaldo('Conta Corrente', 200.0),
      new ItemSaldo('Conta e Saldos Vinculados', 300.0),
      new ItemSaldo('Conta Poupança e Saldos Vinculados', 400.0),
      new ItemSaldo('Investimentos Com Baixa Automática', 500.0),
      new ItemSaldo('Investimentos Sem Baixa Automática', 500.0)
    ]
  );

  dadosCliente = new Cliente(
    'Clifford Devoe',
    24,
    1625.00,
    'Brasileiro'
  );

  dadosCartaoCredito = new CartaoDeCreditoModelo(
    '1234567891011',
    'CLIFFORD DEVOE',
    'MASTER CARD',
    1000.00,
    1200.00,
    2000.00,
    1300.00,
    3000.00
  );

  dadosCartaoDebito?: CartaoDeDebitoModelo;
}