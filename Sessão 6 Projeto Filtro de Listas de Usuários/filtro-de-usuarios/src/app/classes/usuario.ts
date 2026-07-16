import { Endereco } from "./endereco";
import { StatusUsuario } from "./status-usuario";

export class Usuario {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: Endereco;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: StatusUsuario;

  constructor(nome: string, email: string, senha: string, idade: number, endereco: Endereco, telefone: string, ativo: boolean, funcao: string, dataCadastro: string, status: StatusUsuario) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.idade = idade;
    this.endereco = endereco;
    this.telefone = telefone;
    this.ativo = ativo;
    this.funcao = funcao;
    this.dataCadastro = dataCadastro;
    this.status = status;
  }
}