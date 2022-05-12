import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  apiUrl: string

  constructor(private http: HttpClient) {

    this.apiUrl = `https://brasilapi.com.br/api/cnpj/v1`;
   }

    obterDados(cnpj: any): Promise<any>{
      return this.http.get(`${this.apiUrl}/${cnpj}`)
      .toPromise()
      .then( response => response);
    }

}
