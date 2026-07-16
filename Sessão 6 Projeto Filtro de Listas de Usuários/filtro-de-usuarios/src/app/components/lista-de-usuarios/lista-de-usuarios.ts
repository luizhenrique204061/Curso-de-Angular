import { Component } from '@angular/core';
import { Usuario } from '../../classes/usuario';
import { ListaDeUsuariosDaAplicacao } from '../../dados/lista-de-usuarios';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: false,
  templateUrl: './lista-de-usuarios.html',
  styleUrl: './lista-de-usuarios.scss',
})
export class ListaDeUsuarios {
  colunasExibidas: string[] = ['nome', 'dataCadastro', 'status'];

  // 2. Tipando a lista com a Classe
  dadosUsuarios: Usuario[] = ListaDeUsuariosDaAplicacao;

  usuarioSelecionado(usuario: Usuario) {
    console.log('Usuário selecionado:', usuario);
  }
}
