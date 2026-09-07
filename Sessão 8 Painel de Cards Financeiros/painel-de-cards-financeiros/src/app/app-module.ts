import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardDeSaldo } from './componentes/card-de-saldo/card-de-saldo';
import { CartaoDeCredito } from './componentes/cartao-de-credito/cartao-de-credito';
import { CartaoDeDebito } from './componentes/cartao-de-debito/cartao-de-debito';
import { CardInformacoesDoCliente } from './componentes/card-informacoes-do-cliente/card-informacoes-do-cliente';

@NgModule({
  declarations: [App, CardDeSaldo, CartaoDeCredito, CartaoDeDebito, CardInformacoesDoCliente],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
