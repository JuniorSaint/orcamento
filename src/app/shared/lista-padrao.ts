
import { Component, OnInit, Injector, OnDestroy } from "@angular/core";
import { InterfacePadrao } from './interface-padrao';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
import { CrudServico } from 'src/app/shared/crud-servico';

@Component({
    selector: '',
    template: '',
    styles: ['']
}) export abstract class ListaPadrao<T extends InterfacePadrao> implements OnInit, OnDestroy {

    searchInput!: string;
    dataSource$!: T[];
    subscription!: Subscription;


    //  ********************** Variáveis do inject   **********************

    protected router: Router;
    protected dialog: MatDialog;
    protected snackBar: MatSnackBar;


    constructor(
        protected injector: Injector,
        protected service: CrudServico<T>
    ) {
        this.router = this.injector.get(Router);
        this.dialog = this.injector.get(MatDialog);
        this.snackBar = this.injector.get(MatSnackBar);
        // this.searchBy = searchBy; 

    }

    // ********************** ngOnInit   ********************** 
    ngOnInit() {

    }

    // ********************** lista do componente   ********************** 

    CompleteList() {
        this.subscription = this.service.get()
            .subscribe(
                dados => this.dataSource$ = dados,
                erro => console.error(erro),
                () => console.log(this.dataSource$)
            );
    }

    // ********************** btn Criar novo   **********************

    // novo() {
    //     this.router.navigate([`user/new`]);
    // }


    // ********************** Deletar  **********************

    delete(id: any): void {

        const dialogRef = this.dialog.open(BotaoConfirmaComponent, {
            panelClass: 'myapp-no-padding-dialog',
            data: {
                mensagem: 'Deseja realmente excluir?',
                botao1: 'Excluir'
            },
        });

        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.service.delete(id)
                        .subscribe(
                            () => this.snackBar.open('Apagado com sucesso', '', { duration: 2000 }),
                            error => this.snackBar.open(`Erro ao deletar ${error}`, '', { duration: 2000 }),
                            () => this.ngOnInit()
                        );
                }
            }
        );
    }

     ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
