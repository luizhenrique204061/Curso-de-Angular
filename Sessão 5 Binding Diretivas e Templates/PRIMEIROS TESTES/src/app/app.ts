import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDesativado = false;

  widthButton = "200px";
  corDoBotao = "blue";
  corDoTexto = "white";

  styleObj = {
    width: "160px",
    backgroundColor: "red",
    color: "white"
  }

  tituloDoBotao = "Devoe";
  botaoDesativado = true;

  isRedButton = true;
  isGreen = true;
  jaClicou = false;

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


  handleInputKeyUp(event: KeyboardEvent) {
    const valorAtual = (event.target as HTMLInputElement).value;
    console.log(valorAtual);
  }

  handleInputEvent(event: Event) {
    const valorAtual = (event.target as HTMLInputElement).value;
    console.log(valorAtual);
  }


  onButtonClick() {
    this.tituloDoBotao = "Título Alterado!!!!";
    this.botaoDesativado = !this.botaoDesativado;
  }


  updateStyleObj() {
    console.log("Atualizando estilo do botão...");
    this.styleObj.width = "150px";
    this.styleObj.backgroundColor = "blue";
  }

  updateStyleObjCorreto() {
    console.log("Atualizando estilo do botão de forma correta...");
    this.styleObj = {
      ...this.styleObj,
      width: "300px",
      backgroundColor: "lightblue",
      color: "black"
    }

  }

  updateWidth() {
    this.widthButton = "450px";
  }

  mudarCorDoBotaoParaVerde() {
    if(this.isGreen == false) {
      this.isGreen = true
    }
  }

  mudarCorDoBotaoParaVermelho() {
    if(this.isGreen == true) {
      this.isGreen = false
    }
  }

}