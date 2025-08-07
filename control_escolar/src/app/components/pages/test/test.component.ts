import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  contador:number = 0;

  aumenta(){
    this.contador = this.contador + 1;
  }

  disminuye(){
    this.contador = this.contador - 1;
  }

  reinicia(){
    this.contador = 0;
  }
}
