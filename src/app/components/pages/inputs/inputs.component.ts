import { Component, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  lista:String[] = Array();
  segundaLista:String[] = Array();
  elemento:String = "";
  click:String = "";
  color: String = "";
  clase:String = "miClase";
  sub$:Subject<String> = new Subject<String>();

  getClase(){
    return "miClase";
  }

  constructor(){
    this.lista = ["dato", "otro"]
    this.segundaLista = ["Lunes", "Martes", "Miércoles"]
  }

  addToList(){
    this.lista.push(this.elemento);
    console.log(this.lista);
    this.sub$.next(this.elemento);
  }

  getNotificacion(event:String){
    this.click = event;
  }

  getAviso(event:Boolean){
    console.log("Avisado")
    this.color = "verde";
  }
}
