import { Component, OnInit, Injector, Input, Output, ViewChild } from '@angular/core';

import { TypeServiceService } from './../type-service-shared/type-service.service';
import { ListaPadrao } from 'src/app/shared/lista-padrao';
import { ITypeService } from '../type-service-shared/type-service-interface';

@Input()

@Component({
  selector: 'app-type-service-list',
  templateUrl: './type-service-list.component.html',
  styleUrls: ['./type-service-list.component.scss']
})
export class TypeServiceListComponent extends ListaPadrao<ITypeService> implements OnInit {




  constructor(
    protected injector: Injector,
    protected service: TypeServiceService
  ) { super(injector, service) }

  ngOnInit(): void {
    this.CompleteList();
  }

  // ********************** routa para editar  **********************

  editForm(id: string) {
    this.router.navigate([`typeService/${id}/edit`]);
  }


  // ********************** Reiniciar o ngOnInit após inclusão  **********************

  recicleNgOn() {
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }



}
