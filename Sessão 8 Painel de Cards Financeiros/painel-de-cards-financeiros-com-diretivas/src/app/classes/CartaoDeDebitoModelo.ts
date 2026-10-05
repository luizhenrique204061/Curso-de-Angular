export class CartaoDeDebitoModelo {
  public numero: string;
  public titular: string;
  public bandeira: string;
  public limiteDiario: number;

  constructor(
    numero: string,
    titular: string,
    bandeira: string,
    limiteDiario: number
  ) {
    this.numero = numero;
    this.titular = titular;
    this.bandeira = bandeira;
    this.limiteDiario = limiteDiario;
  }
}