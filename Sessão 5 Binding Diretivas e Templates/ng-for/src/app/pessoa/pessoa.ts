import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  standalone: false,
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.scss',
})
export class Pessoa {
  @Input({required: true}) nomeDaPessoa = "";
  @Input({required: true}) idadeDaPessoa = 0;
  @Input({required: true}) pessoaIndice = 0;
  @Input({required: true}) isImpar = false
  @Input({required: true}) isSelecionado = false;

  @Output() pessoaSelecionadaEmit = new EventEmitter<number>()

  isPessoaSelecionada() {
    this.pessoaSelecionadaEmit.emit(this.pessoaIndice);
  }
}