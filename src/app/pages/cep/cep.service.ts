import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CepService {
  constructor(private http: HttpClient) {}

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validaCEP = /^[0-9]{8}$/;
      if (validaCEP.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }
}
