import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TestComponent } from '../../dialogs/test/test.component';
import { BulbasaurService } from 'src/app/services/bulbasaur.service';
import { AlertComponent } from '../../reuse/alert/alert.component';
import { PromptComponent } from '../../reuse/prompt/prompt.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  nuevoValor:string = "";

  constructor(private dialogRef:MatDialog, public bulbasaurService:BulbasaurService){}

  openDialog(){
    /* this.dialogRef.open(AlertComponent, {
      data: {
        titulo: "Peligro",
        mensaje: "Los datos que no ha guardado se perderán"
      }
    }); */
    const dialogRef = this.dialogRef.open(PromptComponent, {
      data: {
        titulo: "Pregunta",
        mensaje: "Escriba su nombre"
      }
    })

    dialogRef.afterClosed().subscribe(
      (resutl:any) => {
        console.log("Se cerró el dialogo");
        this.nuevoValor= resutl.toString();
      }
    );
  }

  updateService(){
    this.bulbasaurService.nombre = this.nuevoValor;
  }
}
