import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


export interface FiltroUsuariosParam {
  nome: string | null;
  status: string | null;
  dataInicio: Date | null;
  dataFim: Date | null;
}

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
export class Filtro implements OnDestroy {

  statusControl = new FormControl<string | null>(null);

  @Output() aplicarFiltro = new EventEmitter<FiltroUsuariosParam>();

  private destroy$ = new Subject<void>();

  nomeControl = new FormControl<string | null>(null);

  // Variável auxiliar para saber qual era o status antes do clique
  statusSelecionado: string | null = null;

  statusList = [
    { valor: "Ativo" },
    { valor: "Inativo" },
  ];

  // FormGroup para controlar os campos de data
  rangeDataGroup = new FormGroup({
    dataInicio: new FormControl<Date | null>(null),
    dataFim: new FormControl<Date | null>(null),
  });

  constructor(private snackBar: MatSnackBar) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  emitirFiltro(): void {
    const { dataInicio, dataFim } = this.rangeDataGroup.value;

    // Verifica se preencheu apenas uma das datas
    const rangeIncompleto = (dataInicio && !dataFim) || (!dataInicio && dataFim);

    if (rangeIncompleto) {
      this.snackBar.open(
        'Por favor, informe a data inicial e a data final.',
        'Fechar',
        {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
      return;
    }

    this.aplicarFiltro.emit({
      nome: this.nomeControl.value,
      status: this.statusControl.value,
      dataInicio: dataInicio ?? null,
      dataFim: dataFim ?? null
    });
  }


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

  limparNome(event: MouseEvent): void {
  // Impede que o clique no botão ative ou foque indesejadamente o input
  event.stopPropagation();
  
  // Reseta o valor do control para null (ou string vazia '')
  this.nomeControl.setValue(null);
}

  toggleStatus(statusClicado: string): void {
    if (this.statusSelecionado === statusClicado) {
      // Se clicou no que já estava selecionado, limpa o campo
      this.statusControl.setValue(null);
      this.statusSelecionado = null;
    } else {
      // Se for um novo, apenas atualiza a referência
      this.statusSelecionado = statusClicado;
    }

    // Aguarda um milissegundo para o Material fechar o painel e então remove o foco
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  }
}