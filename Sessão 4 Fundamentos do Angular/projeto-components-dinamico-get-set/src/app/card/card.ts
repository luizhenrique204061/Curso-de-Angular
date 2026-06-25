import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  private _tipoDePlano: string = "";

  @Input() set tipoDePlano(valor: string) {
    this._tipoDePlano = valor.toUpperCase();
  }

  get tipoDePlano(): string {
    return this._tipoDePlano;
  }

  @Input({required: true}) precoDoPlano: number = 0;


  buttonClicked(valorRecebido: boolean) {
    console.log("O botão foi clicado. Valor recebido:" + valorRecebido)

    console.log("Tipo de Plano em Letras Maiúsculas: " + this.tipoDePlano)
  }
}