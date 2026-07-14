import { Endereco } from "./endereco";
import { StatusUsuario } from "./status-usuario";

export interface Usuario {
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
}