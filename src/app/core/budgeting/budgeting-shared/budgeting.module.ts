import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetingRoutingModule } from './budgeting-routing.module';
import { BudgetingListComponent } from '../budgeting-list/budgeting-list.component';
import { BudgetingFormComponent } from '../budgeting-form/budgeting-form.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

// configuracao do locale pt-BR
import {  registerLocaleData  } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData( ptBr );



@NgModule({
  declarations: [
    BudgetingFormComponent,
    BudgetingListComponent
  ],
  imports: [
    CommonModule,
    BudgetingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt-BR'  } ],
})
export class BudgetingModule { }
