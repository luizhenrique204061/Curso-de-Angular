import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../classes/usuario';
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

  // Agora dadosUsuarios é um Input fornecido pelo pai
  @Input( {required: true} ) dadosUsuarios: Usuario[] = [];
  itemSelecionado?: Usuario;

  constructor(private datePipe: DatePipe) {}

  usuarioSelecionado(usuario: Usuario) {
    // 1. Limpa imediatamente qualquer seleção de texto causada por toques duplos/rápidos
    if (window.getSelection()) {
      window.getSelection()?.removeAllRanges();
    }

    // 2. Lógica normal de seleção
    if (this.itemSelecionado === usuario) {
      this.itemSelecionado = undefined;
      this.usuarioSelecionadoEvent.emit(undefined);
      console.log('Usuário desmarcado');
    } else {
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

  onTouchStart(event: TouchEvent): void {
  // Se o usuário já tiver um texto selecionado ao dar um toque rápido, limpa a seleção
  if (window.getSelection()) {
    window.getSelection()?.removeAllRanges();
  }
}

}