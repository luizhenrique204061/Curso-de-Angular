import { Component } from '@angular/core';
import { Usuario } from './classes/usuario';
import { ListaDeUsuariosDaAplicacao } from './dados/lista-de-usuarios';
import { FiltroUsuariosParam } from './components/filtro/filtro';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  dadosUsuarios: Usuario[] = [];
  usuarioSelecionado?: Usuario;
  usuariosFiltrados: Usuario[] = [];

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.dadosUsuarios = ListaDeUsuariosDaAplicacao;
    this.usuariosFiltrados = [...this.dadosUsuarios];
  }

  onFiltrar(filtro: FiltroUsuariosParam): void {
    this.usuariosFiltrados = this.dadosUsuarios.filter(usuario => {
      // 1. Filtro por Nome (insensível a maiúsculas/minúsculas)
      const atendeNome = !filtro.nome ||
        usuario.nome?.toLowerCase().includes(filtro.nome.trim().toLowerCase());

      // 2. Filtro por Status
      const atendeStatus = !filtro.status ||
        (filtro.status === 'Ativo' && usuario.ativo) ||
        (filtro.status === 'Inativo' && !usuario.ativo);

      // 3. Filtro por Data de Cadastro
      let atendeData = true;
      if (usuario.dataCadastro) {
        const dataCad = new Date(usuario.dataCadastro);

        if (filtro.dataInicio) {
          const inicio = new Date(filtro.dataInicio);
          inicio.setHours(0, 0, 0, 0);
          atendeData = atendeData && dataCad >= inicio;
        }

        if (filtro.dataFim) {
          const fim = new Date(filtro.dataFim);
          fim.setHours(23, 59, 59, 999);
          atendeData = atendeData && dataCad <= fim;
        }
      }

      return atendeNome && atendeStatus && atendeData;
    });

    // Se o usuário selecionado no momento não estiver na nova lista filtrada, desmarca ele
    if (this.usuarioSelecionado && !this.usuariosFiltrados.includes(this.usuarioSelecionado)) {
      this.usuarioSelecionado = undefined;
    }
  }

  onUsuarioSelecionado(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
}
