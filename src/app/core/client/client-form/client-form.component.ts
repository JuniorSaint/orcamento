import { IEstado } from 'src/app/shared/estado.service';

import { ClientService } from './../client-shared/client.service';
import { IClient } from './../client-shared/cliente-interface';
import { Component, OnInit, Injector } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { EstadosService } from 'src/app/shared/estado.service'
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent extends FormularioPadrao<IClient> implements OnInit {

  formUpdate!: IClient;
  UF!: any

  phoneType = [
    { name: 'fixo' },
    { name: 'Celular' }
  ]
  Social = [
    { name: 'Whatsapp' },
    { name: 'Telegram' },
    { name: 'Signal' }
  ]

  constructor(
    protected injector: Injector,
    private service: ClientService,
    private estados: EstadosService,

  ) {
    super(injector, 'client', service);
  }

  ngOnInit(): void {

    this.UF = this.estados.getEstado();  // Pegar lista de Estado para dropdown 

    this.popularForm();  // função de popular o forumulário

    this.formulario = this.fb.group({
      _id: [],
      name: [null, Validators.required],
      cpf: [null],
      email: [null, Validators.email],
      phone: this.fb.array([this.addPhone()]),
      address: this.fb.group({
        street: [null],
        district: [null],
        complement: [null],
        city: [null],
        UF: [null],
        zipCode: [null],
      }),
      note: [null],
    });
  }


  // ********************* Inicio para adicionar telefone  ********************

  addPhone(): FormGroup {
    return this.fb.group({
      phoneType: [null],
      phoneNumber: [null],
      social: [null]
    });
  }


  newPhone(): void {
    this.phoneFormControl.push(this.addPhone());
  }

  removeTelefone(i: any): void {
    this.phoneFormControl.removeAt(i);
  }

  get phoneFormControl(): FormArray {
    return this.formulario.get('phone') as FormArray;
  }

  // ********************* Função de Popular Formulário  ********************

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva)
        .subscribe(
          dados => this.formUpdate = dados,
          error => console.log(error),
          () => {
            this.formulario.patchValue({
              _id: this.formUpdate.id,
              name: this.formUpdate.name,
              cpf: this.formUpdate.cpf,
              email: this.formUpdate.email,
              // phone: Phone[],
              address: {
                street: this.formUpdate.address.street,
                district: this.formUpdate.address.district,
                complement: this.formUpdate.address.complement,
                city: this.formUpdate.address.city,
                UF: this.formUpdate.address.UF,
                zipCode: this.formUpdate.address.zipCode,
              },
              note: this.formUpdate.note,

            }
            )
          })
    }

  }



}
