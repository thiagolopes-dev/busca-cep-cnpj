import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnpjComponent } from './cnpj.component';


const routes: Routes = [

  {
  path: 'cnpj', component: CnpjComponent,
  }
  ];
@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CnpjRountingModule { }

