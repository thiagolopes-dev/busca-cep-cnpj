import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  constructor(
    private cepService: CepService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  consultaCEP(cep, form) {
    this.spinner.show();
    cep = cep.replace(/\D/g, '');
    if (cep !== null && cep !== '') {
      this.resetFormCep(form);
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados) => {
          this.populaCEPForm(dados, form);
          this.spinner.hide();
        });
    }
    else{
      this.spinner.hide();
    }
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
}
