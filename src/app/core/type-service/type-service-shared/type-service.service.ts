
import { Injector } from '@angular/core';
import { ITypeService } from './type-service-interface';
import { Injectable } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService extends CrudServico<ITypeService>{


  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/typeservice', injector)
  }



}

