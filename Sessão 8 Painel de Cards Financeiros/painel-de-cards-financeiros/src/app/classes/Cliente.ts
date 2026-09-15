import Decimal from "decimal.js";

export class Cliente {
    public nome: string;
    public idade: number;
    public rendaMensal: Decimal;
    public nacionalidade: string;

    constructor (
        nome: string,
        idade: number,
        rendaMensal: Decimal,
        nacionalidade: string
    ) {
        this.nome = nome;
        this.idade = idade;
        this.rendaMensal = rendaMensal;
        this.nacionalidade = nacionalidade;
    }
}