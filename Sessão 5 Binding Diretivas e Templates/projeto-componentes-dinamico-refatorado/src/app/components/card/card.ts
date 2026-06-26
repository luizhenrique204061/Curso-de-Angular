import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({required: true}) tipoDePlano = "";
  @Input({required: true}) precoDoPlano = 0;

  @Input() cardBotaoDesativado: boolean = false;


  @Input({required: true}) cardStyle: 'laranja' | 'roxo' = "laranja";

  @Output() buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }
}
