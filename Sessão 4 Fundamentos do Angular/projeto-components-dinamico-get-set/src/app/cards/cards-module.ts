import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardRoxo } from '../card-roxo/card-roxo';
import { CardButton } from '../card-button/card-button';
import { CardRoxoButton } from '../card-roxo-button/card-roxo-button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [Card, CardRoxo, CardButton, CardRoxoButton],
  imports: [CommonModule, MatSliderModule],
  exports: [Card, CardRoxo],
})
export class CardsModule {}
