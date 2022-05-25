import { Component, ElementRef, OnInit } from '@angular/core';
import { CEPError, CEPErrorCode, NgxViacepService } from '@brunoc/ngx-viacep';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { catchError, EMPTY } from 'rxjs';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  buscar: boolean;
  mycep: number;

  constructor(
    private cepService: CepService,
    private spinner: NgxSpinnerService,
    private viacep: NgxViacepService,
    private messageService: MessageService,
    private toastr: ToastrService,
    cepElement: ElementRef
  ) { }

  ngOnInit(): void { }

  consultaCEP(cep, form) {
    this.resetFormCep(form);
    this.spinner.show();
    this.buscar = true;
    this.viacep
      .buscarPorCep(cep)
      .pipe(
        catchError((error: CEPError) => {
          switch (error.getCode()) {
            case CEPErrorCode.CEP_VAZIO:
              // this.cepVazio();
              this.buscar = false;
              this.spinner.hide();
              break;
            case CEPErrorCode.CEP_NAO_ENCONTRADO:
              this.cepNaoEncontrado();
              this.buscar = false;
              this.spinner.hide();
              break;
            case CEPErrorCode.CEP_MUITO_CURTO:
              this.buscar = false;
              this.cepCurto();
              this.spinner.hide();
              break;
          }
          return EMPTY;
        })
      )
      .subscribe((dados) => {
        this.populaCEPForm(dados, form);
        this.spinner.hide();
      });
  }

  populaCEPForm(dados, formulario) {
    formulario.form.patchValue({
      logradouro: dados.logradouro.toUpperCase(),
      localidade: dados.localidade.toUpperCase(),
      bairro: dados.bairro.toUpperCase(),
      numero: dados.numero,
      complemento: dados.complemento.toUpperCase(),
      uf: dados.uf.toUpperCase(),
    });
  }

  resetFormCep(formulario) {
    formulario.form.patchValue({
      logradouro: null,
      localidade: null,
      bairro: null,
      numero: null,
      complemento: null,
      uf: null,
    });
  }

  cepVazio() {
    this.messageService.add({ severity: 'info', summary: 'Atenção', detail: 'Cep vazio!' });
  }
  cepCurto() {
    this.messageService.add({ severity: 'info', summary: 'Atenção', detail: 'Cep muito curto!' });
  }
  cepNaoEncontrado() {
    this.messageService.add({ severity: 'error', summary: 'Atenção', detail: 'Cep não encontrado!' });
  }
  // TODO toastr lib externa
  // cepCurto() {
  //   this.toastr.success('Cep muito curto', '👋 Atenção');
  // }
}
