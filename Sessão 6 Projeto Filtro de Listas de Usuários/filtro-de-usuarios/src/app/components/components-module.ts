import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material-module';
import { DetalhesDoUsuario } from './detalhes-do-usuario/detalhes-do-usuario';

@NgModule({
  declarations: [DetalhesDoUsuario],
  imports: [CommonModule, AngularMaterialModule],
  exports: [DetalhesDoUsuario],
})
export class ComponentsModule {}
