import Decimal from "decimal.js";

export class CartaoDeCreditoModelo {
    public numero: string;
    public titular: string;
    public bandeira: string;
    public limiteCompra: Decimal;
    public disponivelCompra: Decimal;
    public limiteSaque: Decimal;
    public disponivelSaque: Decimal;
    public limiteTotalUtilizado: Decimal;


    constructor (
        numero: string,
        titular: string,
        bandeira: string,
        limiteCompra: Decimal,
        disponivelCompra: Decimal,
        limiteSaque: Decimal,
        disponivelSaque: Decimal,
        limiteTotalUtilizado: Decimal
    ) {
        this.numero = numero;
        this.titular = titular;
        this.bandeira = bandeira;
        this.limiteCompra = limiteCompra;
        this.disponivelCompra = disponivelCompra;
        this.limiteSaque = limiteSaque;
        this.disponivelSaque = disponivelSaque;
        this.limiteTotalUtilizado = limiteTotalUtilizado;
    }
}