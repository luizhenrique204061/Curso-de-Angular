import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-filtro',
  standalone: false,
  templateUrl: './filtro.html',
  styleUrl: './filtro.scss',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class Filtro {

  statusList = [
    { valor: "Ativo" },
    { valor: "Inativo" },
  ];

  // FormGroup para controlar os campos de data
  rangeDataGroup = new FormGroup({
    dataInicio: new FormControl<Date | null>(null),
    dataFim: new FormControl<Date | null>(null),
  });

  


  // Limpa o FormGroup e sincroniza visualmente o Material Datepicker
  limparRangeData(event: MouseEvent): void {
    // Impede a propagação do evento de clique para não focar ou abrir o datepicker
    event.stopPropagation();

    // Reseta os valores do formulário
    this.rangeDataGroup.reset();

    // Remove o foco do elemento ativo (botão/input)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}