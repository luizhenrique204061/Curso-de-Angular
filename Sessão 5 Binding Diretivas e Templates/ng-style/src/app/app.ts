import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  fontSize = 15;
  textColor: 'white' | 'orange' = 'white';
  textoDoBotao: 'Branco' | 'Laranja' = 'Laranja';

  aumentarTamanhoDaFonte() {
    this.fontSize += 5;
  }

  diminuirTamanhoDaFonte() {
    if (this.fontSize > 15) {
      this.fontSize -= 5;
    }
  }

  mudarCorDoBotao() {
    if(this.textColor === 'white') {
      this.textColor = 'orange';
      this.textoDoBotao = 'Branco';
    } else {
      this.textColor = 'white';
      this.textoDoBotao = 'Laranja';
  }
}

}
