import { TypeServiceListComponent } from './../type-service-list/type-service-list.component';
import { TypeServiceFormComponent } from './../type-service-form/type-service-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TypeServiceFormComponent, data: { Title: 'Lista de Categoria' } },
  { path: 'new', component: TypeServiceFormComponent, data: { Title: 'Cadastrando Categoria' } },
  { path: ':id/edit', component: TypeServiceFormComponent, data: { Title: 'Editando Categoria'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeServiceRoutingModule { }
