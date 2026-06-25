import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({transform: (valor: string) => deixarLetrasMaiculas(valor)}) tipoDePlano: string = "";
  @Input({required: true}) precoDoPlano: number = 0;


  buttonClicked(valorRecebido: boolean) {
    console.log("O botão foi clicado. Valor recebido:" + valorRecebido)
  }
}

function deixarLetrasMaiculas(valor: string) {
  console.log("A função está sendo chamada. O valor uppecase é: " + valor)
  return valor.toUpperCase();

}