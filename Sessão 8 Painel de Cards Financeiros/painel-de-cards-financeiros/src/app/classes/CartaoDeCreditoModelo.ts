export class CartaoDeCreditoModelo {
  public numero: string;
  public titular: string;
  public bandeira: string;
  public limiteCompra: number;
  public disponivelCompra: number;
  public limiteSaque: number;
  public disponivelSaque: number;
  public limiteTotalUtilizado: number;

  constructor(
    numero: string,
    titular: string,
    bandeira: string,
    limiteCompra: number,
    disponivelCompra: number,
    limiteSaque: number,
    disponivelSaque: number,
    limiteTotalUtilizado: number
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