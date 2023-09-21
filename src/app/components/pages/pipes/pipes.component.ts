import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';
import { AddProductComponent } from '../../dialogs/add-product/add-product.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{
  list:Producto[] = Array();

  constructor(private dialog:MatDialog){}

  addProduct(){
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe((value:any)=>{
      console.log("Dialogo cerrado")
      const producto:Producto = value as unknown as Producto;
      this.list.push(producto);
      console.log(producto);
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.list.push(new Producto("Lapiz #2", "LL02", "Verde,Amarillo", 450.00));
    this.list.push(new Producto("Goma", "GG0302", "Cyan,Magenta", 15.00));
    this.list.push(new Producto("Zacapuntas", "GG0302", "Verde,Azul", 15.00));
    this.list.push(new Producto("Boligrafo", "GG0302", "Amarillo,Rojo", 15.00));
  }

  edit(id:any){

  }

  remove(id:any){

  }
}
