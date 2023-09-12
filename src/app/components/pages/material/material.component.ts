import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestComponent } from '../../dialogs/test/test.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  constructor(private dialogRef:MatDialog){}

  openDialog(){
    this.dialogRef.open(TestComponent);
  }
}
