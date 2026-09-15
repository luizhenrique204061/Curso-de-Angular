import Decimal from "decimal.js";
import { ItemSaldo } from './ItemSaldo';

export class BalancoFinanceiro {
    public saldoDisponivel: Decimal;
    public saldoTotal: Decimal;
    public livreMovimentacao: Decimal;
    public itens: ItemSaldo[];


    constructor (
        saldoDisponivel: Decimal,
        saldoTotal: Decimal,
        livreMovimentacao: Decimal,
        itens: ItemSaldo[]
    ) {
        this.saldoDisponivel = saldoDisponivel;
        this.saldoTotal = saldoTotal;
        this.livreMovimentacao = livreMovimentacao;
        this.itens = itens;
    }
    
}