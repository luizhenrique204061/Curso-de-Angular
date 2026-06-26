import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button';
import { Card } from './card/card';

@NgModule({
  declarations: [Button, Card],
  imports: [CommonModule],
  exports: [Button, Card]
})
export class ComponentsModule {}
