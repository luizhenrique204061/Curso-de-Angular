import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  mostrarDiv = false;

  mudarExibicaoDiv() {
    if (this.mostrarDiv === false) {
      this.mostrarDiv = true;
    } else {
      this.mostrarDiv = false;
    }
  }
}