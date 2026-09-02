import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardBalanco } from './componentes/balanco-card/balanco-card';
import { CartaoDeCredito } from './componentes/cartao-de-credito/cartao-de-credito';
import { CartaoDeDebito } from './componentes/cartao-de-debito/cartao-de-debito';
import { CardInformacoesDoCliente } from './componentes/card-informacoes-do-cliente/card-informacoes-do-cliente';

@NgModule({
  declarations: [App, CardBalanco, CartaoDeCredito, CartaoDeDebito, CardInformacoesDoCliente],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
