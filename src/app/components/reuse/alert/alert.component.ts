import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  titulo:String = "";
  mensaje:String ="";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,){

    console.log(data);
  }


  ngOnInit(): void {
    this.titulo = this.data.titulo?this.data.titulo:"";
    this.mensaje = this.data.mensaje?this.data.mensaje:"";
  }


}
