import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({required: true}) textoDoBotao: string = ""
  @Input({required: true}) 
  buttonStyle: 'branco' | 'roxo' = "branco";

  @Input() isDesativado = false;


  @Output() buttonClickedEmiter = new EventEmitter<void>()

  onButtonClicked() {
    this.buttonClickedEmiter.emit()
  }
}