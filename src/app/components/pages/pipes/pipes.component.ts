import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';
import { AddProductComponent } from '../../dialogs/add-product/add-product.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  list: Producto[] = Array();

  constructor(private dialog: MatDialog) {}

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe((value: any) => {
      if (value != undefined && value != "") {
        console.log('Dialogo cerrado');
        console.log(typeof value);
        const producto: Producto = value as unknown as Producto;
        this.list.push(producto);
        console.log();
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.list.push(new Producto('Lapiz #2', 'LL02', 'Verde,Amarillo', 450.0));
    this.list.push(new Producto('Goma', 'GG0302', 'Cyan,Magenta', 15.0));
    this.list.push(new Producto('Zacapuntas', 'GG0302', 'Verde,Azul', 15.0));
    this.list.push(new Producto('Boligrafo', 'GG0302', 'Amarillo,Rojo', 15.0));
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: {
        producto: this.list[id]
      }
    });
  }

  remove(id: number) {
    this.list.splice(id, 1);
  }
}
