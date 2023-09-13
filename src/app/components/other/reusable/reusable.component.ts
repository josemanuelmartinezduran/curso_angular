import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit{
  @Input() lista:String[] = Array();
  @Output() notifica:EventEmitter<String>;
  @Output() onAvisa:EventEmitter<Boolean> = new EventEmitter<Boolean>;
  elemento:String = "";
  bcolor:boolean = true;
  @Input() color:String = "";
  @Input() sub$:Subject<String> = new Subject<String>();

  ngOnInit(): void {
    this.sub$.subscribe((value:String) => {
      console.log(value);
      this.setColor(value);
    });
  }

  constructor(){
    this.notifica = new EventEmitter<String>();
  }

  addToList(){
    this.lista.push(this.elemento);
    console.log(this.lista);
  }

  generaEvento(){
    this.notifica.emit("Se ha dado click al botón");
  }

  setBlue(){
    this.color = "azul";
  }
  setGreen(){
    this.color = "verde";
  }

  avisa(){
    this.onAvisa.emit(true);
  }
  setColor(color:String){
    this.color = color;
  }
}
