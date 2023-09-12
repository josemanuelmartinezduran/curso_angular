import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() cadena:String = "";

  constructor(){
    console.log("en este momento se ejecuta el constructor");
  }
}
