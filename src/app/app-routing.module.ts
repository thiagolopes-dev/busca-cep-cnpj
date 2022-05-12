import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './pages/cep/cep.component';
import { CnpjComponent } from './pages/cnpj/cnpj.component';

const routes: Routes = [
  {path: 'cep', component: CepComponent},
  {path: 'cnpj', component: CnpjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
