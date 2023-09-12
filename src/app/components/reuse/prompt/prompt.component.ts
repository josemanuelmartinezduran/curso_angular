import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  titulo:String = "";
  mensaje:String = "";
  valor:String = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,){}

  ngOnInit(): void {
    this.titulo = this.data.titulo?this.data.titulo:"";
    this.mensaje = this.data.mensaje?this.data.mensaje:"";
  }


}
