import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  @Input() titleHome = 'Consultando CEP';
  buscacep: string = '';
  buscar: boolean = false;

  constructor(
    private cepService: CepService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Buscando CEP');
  }

  buscarCEP(buscacep: any, form: any) {
    if (buscacep != null && buscacep !== '' && buscacep >= 8) {
      this.spinner.show();
      this.cepService.consultaCEP(buscacep).subscribe({
        next: (dados) => {
          this.buscar = true;
          setTimeout(() => {
            this.populaCEPForm(dados, form);
          }, 100);
          this.spinner.hide();
        },
        error: (e) => {
          this.resetaCEPForm(form);
          this.buscar = false;
          this.spinner.hide();
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar cep!'
          });
        }
      })
    }
  }

  populaCEPForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      logradouro: dados.street,
      cidade: dados.city,
      bairro: dados.neighborhood,
      estado: dados.state
    })
  }

  resetaCEPForm(formulario: any) {
    formulario.form.patchValue({
      logradouro: null,
      cidade: null,
      bairro: null,
      estado: null
    })
    this.buscar = false;
  }

}
