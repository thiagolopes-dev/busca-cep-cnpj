import { Component, OnInit } from '@angular/core';
import { CEPError, CEPErrorCode, Endereco, NgxViacepService } from '@brunoc/ngx-viacep';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { catchError, EMPTY } from 'rxjs';
import { Cep } from 'src/app/models/cep.model';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {

  ceps = new Cep();
  constructor(
    private cepService: CepService,
    private viacep: NgxViacepService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }
  // // }
  consultaCEP(cep, form) {
    this.spinner.show();
    this.resetFormCep(form);
    this.viacep
      .buscarPorCep(cep)
      .pipe(
        catchError((error: CEPError) => {
          switch (error.getCode()) {
            case CEPErrorCode.CEP_VAZIO:
              // this.cepVazio();
              // forma hardcode de chamar o toastr
              // this.toastr.warning('Cep Vazio!', '👇🏼');
              this.spinner.hide();
              break;
            case CEPErrorCode.CEP_MUITO_CURTO:
              this.cepCurto();
              this.spinner.hide();
              break;
            case CEPErrorCode.CEP_NAO_ENCONTRADO:
              this.cepNaoEncontrado();
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
      cep: null,
      logradouro: null,
      localidade: null,
      bairro: null,
      numero: null,
      complemento: null,
      uf: null,
    });
  }

  cepCurto() {
    this.toastr.info('Cep muito curto!', 'Atenção');
  }
  cepNaoEncontrado() {
    this.toastr.error('Cep não encontrado!', 'Erro');
  }

  cepVazio() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Cep Vazio' });
  }

  // consultaCEP(cep,form){
  //     this.spinner.show();
  //   cep = cep.replace(/\D/g, '');
  //   if (cep !== null && cep !== '' && cep.length === 8) {
  //     this.resetFormCep(form);
  //     this.cepService
  //       .consultaCEP(cep)
  //       .subscribe((dados) => {
  //         this.populaCEPForm(dados, form);
  //         this.spinner.hide();
  //       });
  //   }
  //   else{
  //     this.spinner.hide();
  //   }

}
