import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Raqueta } from '../stock-list/raqueta';
import { RaquetasCarritoService } from '../carrito-raquetas.service';

@Component({
  selector: 'app-carrito-raquetas',
  templateUrl: './carrito-raquetas.component.html',
  styleUrls: ['./carrito-raquetas.component.scss']
})
export class CarritoRaquetasComponent implements OnInit {
  listaDeCarrito$: Observable<Raqueta[]>;
  compraRealizada: boolean = false;
  raquetas: Raqueta[] = [];

  constructor(private carritoService: RaquetasCarritoService) {
    this.listaDeCarrito$ = this.carritoService.listaDeCarrito;
  }

  ngOnInit(): void {}

  realizarCompra() {
    this.compraRealizada = true;
  }
}

