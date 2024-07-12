import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaquetonGralComponent } from './raqueton-gral/raqueton-gral.component';
import { RaquetonContactoComponent } from './raqueton-contacto/raqueton-contacto.component';

const routes: Routes = [

  {
    path: '' ,
    redirectTo: 'general',
    pathMatch: 'full',
  },

  {
    path: 'general' ,
    component : RaquetonGralComponent
  },
  {
    path: 'contacto' ,
    component : RaquetonContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
