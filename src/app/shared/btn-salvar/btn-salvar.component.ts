import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-btn-salvar',
  templateUrl: './btn-salvar.component.html',
  styleUrls: ['./btn-salvar.component.scss']
})
export class BtnSalvarComponent implements OnInit {

  formulario!: FormGroup;
  txtBtn!: string;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() { }
  voltar() { }

}
