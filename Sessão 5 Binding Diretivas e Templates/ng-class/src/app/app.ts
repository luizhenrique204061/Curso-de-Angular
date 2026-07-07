import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  isVerde: boolean = true;

  irParaVerde() {
    this.isVerde = true;
  }

  irParaLaranja() {
    this.isVerde = false;
  }
}
