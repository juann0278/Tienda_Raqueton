import { Component } from '@angular/core';
import { Raqueta } from './raqueta';
import { RaquetasCarritoService } from '../carrito-raquetas.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent {
raquetas: Raqueta[] = [
{
  marca: "Babolat",
  modelo: "Pure Aero",
  precio:8000,
  stock: 6,
  imagen: "/assets/Imagenes/BabolatPureAero.jpeg",
  oferta: false,
  cantidad : 0,
},
{
  marca: "Wilson",
  modelo: "Pro Staff",
  precio:5800,
  stock: 5,
  imagen: "/assets/Imagenes/RaquetaWilson.jpeg",
  oferta: true,
  cantidad : 0,
},
{
  marca: "Head",
  modelo: "Speed",
  precio:6500,
  stock: 10,
  imagen: "/assets/Imagenes/RaquetaHead.jpeg",
  oferta: false,
  cantidad : 0,
},
{
  marca: "Yonex",
  modelo: "Flame",
  precio:5500,
  stock: 8,
  imagen: "/assets/Imagenes/RaquetaYonexFlame.jpeg",
  oferta: false,
  cantidad : 0,
}

];
  

constructor(private carrito: RaquetasCarritoService){}
 

ngOnInit(): void {

}

 
agregarCarrito(raqueta: Raqueta) : void{
if (raqueta.cantidad>0){
   this.carrito.agregarCarrito(raqueta);
}
raqueta.stock -= raqueta.cantidad;
raqueta.cantidad = 0;
}

topeMax(m: string){
  alert(m)
}

}
