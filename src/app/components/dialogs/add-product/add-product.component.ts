import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  descripcion: String = '';
  colores: String = '';
  clave: String = '';
  precio: number = 0;

  constructor(public dialogRef: MatDialogRef<AddProductComponent>) {}

  onAddProduct() {
    this.dialogRef.close(
      new Producto(
        this.descripcion as string,
        this.clave as string,
        this.colores as string,
        this.precio as number
      )
    );
  }
}
