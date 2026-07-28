import { Component} from '@angular/core';
import { Usuario } from './classes/usuario';
import { ListaDeUsuariosDaAplicacao } from './dados/lista-de-usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  dadosUsuarios: Usuario[] = ListaDeUsuariosDaAplicacao;
  usuarioSelecionado?: Usuario;

  onUsuarioSelecionado(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
}
