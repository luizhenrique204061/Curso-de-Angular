import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material-module';
import { DetalhesDoUsuario } from './detalhes-do-usuario/detalhes-do-usuario';
import { Filtro } from './filtro/filtro';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetalhesDoUsuario, Filtro],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [DetalhesDoUsuario, Filtro],
})
export class ComponentsModule {}
