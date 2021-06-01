import { BotaoConfirmaComponent } from './shared/botao-confirma/botao-confirma.component';

import { LOCALE_ID, NgModule } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng.module';



// configuracao do locale pt-BR
import {  registerLocaleData  } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData( ptBr );

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    NoopAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt-BR'  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
