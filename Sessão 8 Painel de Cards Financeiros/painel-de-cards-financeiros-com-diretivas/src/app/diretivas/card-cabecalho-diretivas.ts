import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardHeader]',
  standalone: false
})
export class CardHeaderDirective {
  @Input('appCardHeader') corFundo: string = 'rgb(233, 129, 50)';

  @HostBinding('style.padding') padding = '15px';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.align-items') alignItems = 'center';
  @HostBinding('style.justify-content') justifyContent = 'space-between';

  @HostBinding('style.background-color')
  get backgroundColor(): string {
    return this.corFundo || 'rgb(233, 129, 50)';
  }
}