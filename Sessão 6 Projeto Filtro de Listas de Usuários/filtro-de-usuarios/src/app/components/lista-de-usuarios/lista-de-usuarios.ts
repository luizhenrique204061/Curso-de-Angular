import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../classes/usuario';
import { ListaDeUsuariosDaAplicacao } from '../../dados/lista-de-usuarios';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: false,
  templateUrl: './lista-de-usuarios.html',
  styleUrl: './lista-de-usuarios.scss',
  providers: [DatePipe]
})
export class ListaDeUsuarios {
  @Output() usuarioSelecionadoEvent = new EventEmitter<Usuario>();
  colunasExibidas: string[] = ['nome', 'dataCadastro', 'status'];

  // 2. Tipando a lista com a Classe
  dadosUsuarios: Usuario[] = ListaDeUsuariosDaAplicacao;
  itemSelecionado?: Usuario;

  constructor(private datePipe: DatePipe) {}

  usuarioSelecionado(usuario: Usuario) {
    // Se o usuário clicado já estiver selecionado, desmarca ele
    if (this.itemSelecionado === usuario) {
      this.itemSelecionado = undefined;
      this.usuarioSelecionadoEvent.emit(undefined);
      console.log('Usuário desmarcado');
    } else {
      // Caso contrário, seleciona o novo usuário normalmente
      this.itemSelecionado = usuario;
      this.usuarioSelecionadoEvent.emit(usuario);
      console.log('Usuário selecionado:', usuario);
    }
  }

  formatarData(data?: Date | string): string {
    if (!data) return '';
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  // Método para formatar o status (Ativo / Inativo)
  formatarStatus(ativo?: boolean): string {
    if (ativo === undefined || ativo === null) return '';
    return ativo ? 'Ativo' : 'Inativo';
  }

}
