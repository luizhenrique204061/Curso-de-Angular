import Decimal from "decimal.js";

export class CartaoDeDebitoModelo {
    public numero: string;
    public titular: string;
    public bandeira: string;
    public limiteDiario: Decimal;


    constructor (
        numero: string,
        titular: string,
        bandeira: string,
        limiteDiario: Decimal
    ) {
        this.numero = numero;
        this.titular = titular;
        this.bandeira = bandeira;
        this.limiteDiario = limiteDiario;
    }
}