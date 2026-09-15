import { NgModule, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardDeSaldo } from './componentes/card-de-saldo/card-de-saldo';
import { CartaoDeCredito } from './componentes/cartao-de-credito/cartao-de-credito';
import { CartaoDeDebito } from './componentes/cartao-de-debito/cartao-de-debito';
import { CardInformacoesDoCliente } from './componentes/card-informacoes-do-cliente/card-informacoes-do-cliente';

// Registra as regras e símbolos do português brasileiro no Angular
registerLocaleData(localePt);

@NgModule({
  declarations: [
    App,
    CardDeSaldo,
    CartaoDeCredito,
    CartaoDeDebito,
    CardInformacoesDoCliente
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [App],
})
export class AppModule {}