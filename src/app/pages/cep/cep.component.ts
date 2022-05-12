import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
    if (cep !== null && cep !== '') {
      this.resetFormCep(form);
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados) => this.populaCEPForm(dados, form));
    }
  }

  populaCEPForm(dados, formulario) {
    formulario.form.patchValue({
      logradouro: dados.logradouro,
      localidade: dados.localidade,
      bairro: dados.bairro,
      numero: dados.numero,
      complemento: dados.complemento,
      uf: dados.uf,
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
