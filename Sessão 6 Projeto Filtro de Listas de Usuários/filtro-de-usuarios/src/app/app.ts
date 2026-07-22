import { Component} from '@angular/core';
import { Usuario } from './classes/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  usuarioSelecionado?: Usuario;

  onUsuarioSelecionado(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
}
