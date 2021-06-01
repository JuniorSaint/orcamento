import { IService } from './../budgeting-shared/budgeting-interface';
import { Injector, OnDestroy, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { ITypeService } from './../../type-service/type-service-shared/type-service-interface';
import { IClient } from './../../client/client-shared/cliente-interface';
import { TypeServiceService } from './../../type-service/type-service-shared/type-service.service';
import { ClientService } from './../../client/client-shared/client.service';
import { BudgetingService } from './../budgeting-shared/budgeting.service';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { Subscription } from 'rxjs';
import { IBudgeting } from '../budgeting-shared/budgeting-interface';


@Component({
  selector: 'app-budgeting-form',
  templateUrl: './budgeting-form.component.html',
  styleUrls: ['./budgeting-form.component.scss']
})
export class BudgetingFormComponent extends FormularioPadrao<IBudgeting> implements OnInit, OnDestroy {
  formUpdate!: IBudgeting;
  subscriptionClient!: Subscription;
  subscriptionTypeService!: Subscription;
  valorTotalServico = 0;
  clients$!: IClient[];
  typeServices$!: ITypeService[];
  client$!: IClient;
  formBuilder: any;
  @ViewChild('idClient') el!: ElementRef

  constructor(
    protected injector: Injector,
    protected service: BudgetingService,
    private serviceClient: ClientService,
    private serviceType: TypeServiceService
  ) { super(injector, 'bedgeting', service) }

  ngOnInit(): void {
    this.subscriptionClient = this.serviceClient.getByIdName().subscribe(
      (data) => this.clients$ = data,
      erro => console.error(erro),
      () => console.log(this.clients$)
    )   // busca do banco apenas nome e id para popular dropdown cliente

    this.subscriptionTypeService = this.serviceType.get().subscribe(
      (data) => this.typeServices$ = data,
      erro => console.error(erro),
      () => console.log(this.typeServices$)
    )

    this.formulario = this.fb.group({
      _id: [],
      _idClient: [null, Validators.required],
      dateEnter: [new Date().toLocaleDateString('pt-BR'), Validators.required],
      DateDelivery: [new Date().toLocaleDateString('pt-BR'), Validators.required],
      service: this.fb.array([this.adicionarServicoFormulario()]),
      valueTotal: [null],
      valueISS: [null],
      situation: [null],
      note: [null]
    });

    this.popularForm();
  }

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva)
        .subscribe(
          dados => this.formUpdate = dados,
          error => console.log(error),
          () => this.patchFormUpdate(this.formUpdate)
        )
    }
  }

  patchFormUpdate(formUpdate: IBudgeting) {
    this.formulario.patchValue({
      _id: this.formUpdate.id,
      _idClient: this.formUpdate._idClient,
      dateEnter: this.formUpdate.dateEnter,
      DateDelivery: this.formUpdate.DateDelivery,
      valueTotal: this.formUpdate.valueTotal,
      valueISS: this.formUpdate.valueISS,
      situation: this.formUpdate.situation,
      note: this.formUpdate.note,
    })
    this.formulario.setControl('service', this.setExistingService(formUpdate.service))
  }

  setExistingService(service: IService[]): FormArray {
    const formArray = new FormArray([]);
    service.forEach( ser => {
        formArray.push(this.fb.group({
        typeService: ser.typeService,
        valueUnit: ser.valueUnit,
        amount: ser.amount,
        valueAmount: ser.valueAmount
      }));
    })
    return formArray;
  }

  clientBudgeting( ) {
    let id = this.formulario.get('_idClient')?.value
    this.serviceClient.getByID(id).subscribe(dado => this.client$ = dado)
  }

  adicionarServicoFormulario(): FormGroup {
    return this.fb.group({
      typeService: [null, Validators.required],
      amount: [null, Validators.required],
      valueUnit: [null, Validators.required],
      valueAmount: [(null)]
    });
  }

// Adicionar Array de serviço
  adcionarServico(): void {
    this.ServiceFormControl.push(this.adicionarServicoFormulario());
  }

  removerServico(i: number) {
    this.ServiceFormControl.removeAt(i);
  }

  get ServiceFormControl() {
    return this.formulario.get('service') as FormArray;
  }

  totalUnitario() {


  }

  ngOnDestroy() {
    this.subscriptionClient.unsubscribe();
    this.subscriptionTypeService.unsubscribe();
  }
}
