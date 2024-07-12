import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Raqueta } from '../stock-list/raqueta';


@Component({
  selector: 'app-input-numeros',
  templateUrl: './input-numeros.component.html',
  styleUrl: './input-numeros.component.scss'
})
export class InputNumerosComponent implements OnInit {


  constructor() {
    
  }
ngOnInit():void {}


@Input()
cantidad: number = 0;
@Input()
max: number = 0;

@Output()
cantidadChange: EventEmitter<number> =  new EventEmitter<number>();

@Output()
topeMax: EventEmitter<string> =  new EventEmitter<string>();

aumentarCantidad():void{
    if(this.cantidad < this.max){
      this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    } else {
this.topeMax.emit("se ha alcanzado el tope maximo disponible");
    }
      
  }
  disminuirCantidad():void{
    if(this.cantidad>0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad)
      }
    
}
