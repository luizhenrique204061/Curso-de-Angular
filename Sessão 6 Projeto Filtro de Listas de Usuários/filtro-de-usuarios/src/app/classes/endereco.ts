export class Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  pais: string;

  constructor(rua: string, numero: number, cidade: string, estado: string, pais: string) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
  }
}