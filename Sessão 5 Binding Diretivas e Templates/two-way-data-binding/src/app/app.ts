import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  nome = "";

  valorDigitado(evento: string) {
    console.log(evento);

    this.nome = evento
  }

}
