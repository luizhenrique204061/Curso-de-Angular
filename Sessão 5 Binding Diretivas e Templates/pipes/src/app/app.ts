import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  pessoa = {
    nome: "Clifford Devoe",
    status: 1
  }

  pessoa2 = {
    nome: "Ôio Junto",
    status: 2
  }

  pessoa3 = {
    nome: "Felipe",
    status: 3
  }

  aplicarStyle(status: number) {
    console.log("Aplicando style para status:", status);
    return {
      'ativo': status === 1,
      'parcial': status === 2,
      'bloqueado': status === 3
    }
  }
}
