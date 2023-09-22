import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-other-material-components',
  templateUrl: './other-material-components.component.html',
  styleUrls: ['./other-material-components.component.css']
})
export class OtherMaterialComponentsComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("Gracias", "guardado con éxito", {panelClass: "miPanel"});
  }
}
