import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {

  constructor(private http: HttpClient) { }
  consultaCNPJ(cnpj: string) {
    if (cnpj !== '') {
      const validacnpj = /^[0-9]{14}$/;
      if (validacnpj.test(cnpj)) {
        return this.http.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      }
    }
    return of({});
  }
  
}
