import { BotaoConfirmaComponent } from './../../../shared/botao-confirma/botao-confirma.component';
import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { UserListComponent } from './../user-list/user-list.component';
import { UserFormComponent } from './../user-form/user-form.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
      UserFormComponent,
      UserListComponent,
      BotaoConfirmaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,

  ]
})
export class UserModule { }
