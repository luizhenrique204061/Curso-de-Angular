import { Component, Input } from '@angular/core';
import { Usuario } from '../../classes/usuario';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes-do-usuario',
  standalone: false,
  templateUrl: './detalhes-do-usuario.html',
  styleUrl: './detalhes-do-usuario.scss',
  providers: [DatePipe]
})
export class DetalhesDoUsuario {
  @Input({ required: true }) usuario?: Usuario;
  constructor(private datePipe: DatePipe) {}

  formatarTelefone(telefone?: string): string {
    if (!telefone) return '';

    // Remove qualquer caractere que não seja número
    const apenasNumeros = telefone.replace(/\D/g, '');

    // Formato Celular: (XX) XXXXX-XXXX (11 dígitos)
    if (apenasNumeros.length === 11) {
      return apenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    // Formato Fixo: (XX) XXXX-XXXX (10 dígitos)
    if (apenasNumeros.length === 10) {
      return apenasNumeros.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }

    return telefone; // Retorna o valor original caso não encaixe
  }


  formatarData(data?: Date | string): string {
    if (!data) return '';
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  formatarAtivo(ativo?: boolean): string {
    if (ativo === undefined || ativo === null) return '';
    return ativo ? 'Sim' : 'Não';
  }

}
