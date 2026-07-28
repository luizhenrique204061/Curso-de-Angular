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
  dadosUsuarios: Usuario[] = [];
  usuarioSelecionado?: Usuario;

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    // Hoje: pega os dados do mock local
    this.dadosUsuarios = ListaDeUsuariosDaAplicacao;

    // No futuro (com API), seria algo do tipo:
    // this.usuarioService.obterUsuarios().subscribe(dados => this.dadosUsuarios = dados);
  }

  onUsuarioSelecionado(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
}
