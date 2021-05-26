
import { Subscription } from 'rxjs';

import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';


import { UserService } from '../user-shared/user.service';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { IUser } from '../user-shared/user-interface';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends FormularioPadrao<IUser> implements OnInit, OnDestroy {

  formUpdate!: IUser;


  emailUser$!: any;
  emalMatch = true;

  typeUser = [
    { tipU: "Administrador", value: "administrador" },
    { tipU: "Usuário", value: "user" }
  ]

  activeUser = [
    { acUser: "Ativo", value: true },
    { acUser: "Inativo", value: false }
  ]

  constructor(
    protected injector: Injector,
    protected servico: UserService
  ) {
    super(injector, 'user', servico)
  }

  // ********************* NG on Init  ********************

  ngOnInit(): void {

    this.popularForm();  // função de popular o forumulário

    this.formulario = this.fb.group({
      _id: [],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repPassword: ['', [Validators.required, Validators.minLength(6)]],
      active: [null, Validators.required],
      userKind: [null, Validators.required]
    }, { validator: [this.matchingPasswords] },
    );
  }

  // ********************* Comparação de passaword  ********************

  matchingPasswords(group: FormGroup) {

    const password = group.get('password')?.value ?? '';
    const repPassword = group.get('repPassword')?.value ?? '';

    if (repPassword.trim() + password.trim()) {
      return repPassword !== password ? { senhaMatching: false } : null;
    } else {
      return null;
    }
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
              _id: this.formUpdate._id,
              name: this.formUpdate.name,
              email: this.formUpdate.email,
              password: this.formUpdate.password,
              repPassword: this.formUpdate.repPassword,
              active: this.formUpdate.active,
              userKind: this.formUpdate.userKind,
            }
            )
          }
        )
    }
  }

  // ***********************  NgOnDestroy ****************"

  ngOnDestroy() {

  }
}
