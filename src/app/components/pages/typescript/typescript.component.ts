import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  numero:number|undefined;
  cadena:String = "Hola";
  boleano:boolean = false;
  cualquiera:any = null;
  x:undefined;
  aDiasSemana:String[] = Array();

  constructor(){
    this.numero = 3;
    this.aDiasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  }

  toggleShow(){
    this.boleano = !this.boleano;
  }

  ngOnInit(): void {
    console.log(this.aDiasSemana);
    let el = document.getElementById("prueba");
    console.log("El contiene")
    console.log(el)
  }

  onButtonClick(event:MouseEvent):void{
    console.log("HIciste click");
    this.cadena = this.cadena + "a"
  }
}
