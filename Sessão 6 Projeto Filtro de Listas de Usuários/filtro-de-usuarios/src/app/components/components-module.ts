import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material-module';
import { DetalhesDoUsuario } from './detalhes-do-usuario/detalhes-do-usuario';
import { Filtro } from './filtro/filtro';
import { FormsModule } from '@angular/forms';
import { ListaDeUsuarios } from './lista-de-usuarios/lista-de-usuarios';

@NgModule({
  declarations: [DetalhesDoUsuario, Filtro, ListaDeUsuarios],
  imports: [CommonModule, AngularMaterialModule, FormsModule,],
  exports: [DetalhesDoUsuario, Filtro, ListaDeUsuarios],
})
export class ComponentsModule {}
