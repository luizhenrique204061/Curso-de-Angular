import { ItemSaldo } from './ItemSaldo';

export class BalancoFinanceiro {
  public saldoDisponivel: number;
  public saldoTotal: number;
  public livreMovimentacao: number;
  public itens: ItemSaldo[];

  constructor(
    saldoDisponivel: number,
    saldoTotal: number,
    livreMovimentacao: number,
    itens: ItemSaldo[]
  ) {
    this.saldoDisponivel = saldoDisponivel;
    this.saldoTotal = saldoTotal;
    this.livreMovimentacao = livreMovimentacao;
    this.itens = itens;
  }
}