import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss',
})
export class CardButton {
@Output() buttonClick = new EventEmitter<boolean>();
  onButtonClick() {
      console.log("Clicando no botão no filho");
  
      this.buttonClick.emit(true);
  }


}
