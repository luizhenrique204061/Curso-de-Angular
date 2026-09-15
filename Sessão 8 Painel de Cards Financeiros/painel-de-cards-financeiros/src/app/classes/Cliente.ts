export class Cliente {
  public nome: string;
  public idade: number;
  public rendaMensal: number;
  public nacionalidade: string;

  constructor(
    nome: string,
    idade: number,
    rendaMensal: number,
    nacionalidade: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.rendaMensal = rendaMensal;
    this.nacionalidade = nacionalidade;
  }
}