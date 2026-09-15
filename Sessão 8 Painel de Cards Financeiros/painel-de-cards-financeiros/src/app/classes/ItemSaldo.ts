import Decimal from "decimal.js";

export class ItemSaldo {
  public descricao: string;
  public valor: Decimal;

  constructor(descricao: string, valor: Decimal) {
    this.descricao = descricao;
    this.valor = valor;
  }
}