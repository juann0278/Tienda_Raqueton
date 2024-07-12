import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { FormsModule } from '@angular/forms';
import { RaquetonContactoComponent } from './raqueton-contacto/raqueton-contacto.component';
import { RaquetonGralComponent } from './raqueton-gral/raqueton-gral.component';
import { InputNumerosComponent } from './input-numeros/input-numeros.component';
import { CarritoRaquetasComponent } from './carrito-raquetas/carrito-raquetas.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    RaquetonContactoComponent,
    RaquetonGralComponent,
    InputNumerosComponent,
    CarritoRaquetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
