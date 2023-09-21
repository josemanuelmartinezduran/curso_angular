import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit{
  descripcion: String = '';
  colores: String = '';
  clave: String = '';
  precio: number = 0;
  errorText = "";

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {
    const producto:Producto = this.data.producto;
    this.descripcion = producto.descripcion;
    this.colores = producto.colores;
    this.clave = producto.clave;
    this.precio = producto.precio;
  }

  onAddProduct() {
    if(this.descripcion == "")
      this.errorText = "Debe colocar una descripción"
    if(this.colores == "")
      this.errorText += "Debe colocar al menos un color"
    if(this.precio <= 0)
      this.errorText += "El precio no puede ser menor o igual a cero"
    if(this.clave == "")
      this.errorText += "La clave no puede estar vacía"
    if(this.errorText != ""){
      alert("Revise el formulario");
      return;
    }
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
