import { BtnSalvarComponent } from './btn-salvar/btn-salvar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
import { PrimengModule } from './primeng.module';





@NgModule({
  declarations: [
    BotaoConfirmaComponent,
    BtnSalvarComponent

  ],
  imports: [
    CommonModule,
    PrimengModule
    
    

  ]
})
export class SharedModule { }
