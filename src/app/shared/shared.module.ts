
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';





@NgModule({
  declarations: [
    BotaoConfirmaComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    
    

  ]
})
export class SharedModule { }
