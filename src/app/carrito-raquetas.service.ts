import { Injectable } from '@angular/core';
import { Raqueta } from './stock-list/raqueta';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RaquetasCarritoService {
  eliminarRaqueta(raquetas: Raqueta[]) {
    throw new Error('Method not implemented.');
  }

  private _listaDeCarrito: Raqueta[] = [];
  listaDeCarrito: BehaviorSubject<Raqueta[]> = new BehaviorSubject<Raqueta[]>([]);

  constructor() { }

  agregarCarrito(raqueta: Raqueta) {
    let item = this._listaDeCarrito.find((v1) => v1.modelo = raqueta.modelo);
    if (!item) {
      this._listaDeCarrito.push({ ...raqueta });
    } else {
      item.cantidad += raqueta.cantidad;
    }
    console.log(this._listaDeCarrito);
    this.listaDeCarrito.next(this._listaDeCarrito);
  }


}

