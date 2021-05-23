import { IClient } from './cliente-interface';
import { Injectable, Injector } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudServico<IClient>{

  constructor(
    private injector: Injector
  ) {super('http://localhost:5000/client', injector) }
}
