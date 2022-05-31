import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://brasilapi.com.br/api/cnpj/v1`;
  }
  consultaCNPJ(cnpj: string) {
    cnpj = cnpj.replace(/\D/g, '');
    if (cnpj !== '') {
      const validaCNPJ = /^[0-9]{14}$/;
      if (validaCNPJ.test(cnpj)) {
        return this.http.get(`${this.apiUrl}/${cnpj}`);
      }
    }
    return of({});
  }
  // consultaCNPJ(cnpj: string) {
  //   console.log(cnpj);
  //   // Nova variável "cnpj" somente com dígitos.
  //   // cnpj = cnpj.replace(/\D/g, '');
  //   console.log('apos o replace');
  //   console.log(cnpj);
  //   // Verifica se campo cnpj possui valor informado.
  //   if (cnpj !== '') {
  //     // Expressão regular para validar o CNPJ.
  //     const validacnpj = /^[0-9]{14}$/;
  //     // Valida o formato do CNPJ.
  //     if (validacnpj.test(cnpj)) {
  //       return this.http.get(`${this.apiUrl}/${cnpj}`);
  //     }
  //   }
  //   return of({});
  // }
}
