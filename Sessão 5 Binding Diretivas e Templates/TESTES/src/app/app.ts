import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  inputText: string = "Texto Inicial Alterado";
  inputType = "text";
  isDesativado = false;


  ativarInput() {
    this.isDesativado = false;
  }

  desativarInput() {
    this.isDesativado = true;
  }

  inserirSenha() {
    this.inputType = "password";
  }

  inserirTexto() {
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText);
  }

}
