import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from 'component/componente1/componente1.component';
import { Componente2Component } from 'component/componente2/componente2.component';
import { pathToFileURL } from 'url';

const routes: Routes = [
  {
    path:'', component: Componente1Component
  },
  {
    path: 'web2',component: Componente2Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
