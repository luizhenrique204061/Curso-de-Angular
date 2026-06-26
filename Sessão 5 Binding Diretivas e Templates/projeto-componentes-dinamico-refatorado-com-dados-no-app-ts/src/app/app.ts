import { Component } from '@angular/core';

// Definindo o formato do nosso plano (opcional, mas uma boa prática)
interface Plano {
  tipo: string;
  preco: number;
  estilo: 'laranja' | 'roxo';
  desativado?: boolean; // O ponto de interrogação indica que é opcional
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  // Sua lista de planos concentrada em um só lugar
  planos: Plano[] = [
    { tipo: 'Simples', preco: 100, estilo: 'laranja', desativado: true },
    { tipo: 'Completo', preco: 200, estilo: 'roxo' } // Mudei para "Completo" para fazer mais sentido com o preço!
  ];

  onCardButton() {
    console.log("Chamada de API");
  }
}