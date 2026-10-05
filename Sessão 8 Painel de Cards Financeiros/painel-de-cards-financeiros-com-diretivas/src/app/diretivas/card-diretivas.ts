import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCard]',
  standalone: false
})
export class CardDirective {
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.overflow') overflow = 'hidden';
  @HostBinding('style.border-radius') borderRadius = '5px';
  @HostBinding('style.background-color') bg = '#ffffff';
  @HostBinding('style.display') display = 'block';
}