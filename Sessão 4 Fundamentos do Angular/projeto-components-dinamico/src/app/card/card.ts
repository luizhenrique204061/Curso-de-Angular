import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() tipoDePlano: string = "";
  @Input({required: true}) precoDoPlano: number = 0;


  buttonClicked(valorEmitido: boolean) {
    console.log("O botão foi clicado. Valor recebido:" + valorEmitido)
  }
}