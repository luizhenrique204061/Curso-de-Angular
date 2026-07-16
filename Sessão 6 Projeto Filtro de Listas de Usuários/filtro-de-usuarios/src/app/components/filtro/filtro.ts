import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  standalone: false,
  templateUrl: './filtro.html',
  styleUrl: './filtro.scss',
})
export class Filtro {

  statusList = [
    {valor: "Ativo"},
    {valor: "Inativo"},
  ];
}
