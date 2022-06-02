import { CnpjService } from './cnpj.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css'],
})
export class CnpjComponent implements OnInit {
  buscar: boolean;
  buscarcnpj: string;

  constructor(
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private cnpjService: CnpjService
  ) {}

  ngOnInit(): void {}

  consultaCNPJ(buscarcnpj, form) {
    if (buscarcnpj != null && buscarcnpj !== '') {
      this.spinner.show();
      this.resetaCnpjForm(form);
      this.cnpjService.consultaCNPJ(this.buscarcnpj).subscribe({
        next: (dados) => {
          this.spinner.hide();
          this.buscar = true;
          setTimeout(() => {
            this.populaCnpjForm(dados, form);
          }, 100);
        },
        error: (e) => {
          this.spinner.hide();
          this.buscar = false;
          this.messageService.add({
            severity: 'warn',
            summary: 'Atenção',
            detail: 'Erro ao buscar Cnpj!',
          });
        },
      });
    } else {
      this.spinner.hide();
      this.buscar = false;
    }
  }
  populaCnpjForm(dados, formulario) {
    formulario.form.patchValue({
      razao_social: dados.razao_social,
      nome_fantasia: dados.nome_fantasia,
      cep: dados.cep,
      logradouro: dados.logradouro,
      numero: dados.numero,
      bairro: dados.bairro,
      municipio: dados.municipio,
      uf: dados.uf,
      ddd_telefone_1: dados.ddd_telefone_1,
    });
  }

  resetaCnpjForm(formulario) {
    formulario.form.patchValue({
      cpfOuCnpj: null,
      razaoSocial: null,
      fantasia: null,
      cep: null,
      logradouro: null,
      numero: null,
      bairro: null,
      cidade: null,
      telefonep: null,
      emailAdm: null,
      uf: null,
    });
  }
}
