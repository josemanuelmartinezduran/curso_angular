import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent {
  @Input() inicio: number = 0;
  @Input() fin: number = 100;
  numerosPrimos: number[] = [];

  constructor() {
    this.calcularNumerosPrimos();
  }

  calcularNumerosPrimos() {
    for (let num = this.inicio; num <= this.fin; num++) {
      if (this.esPrimo(num)) {
        this.numerosPrimos.push(num);
      }
    }
  }

  checkPrimeNumber(numero:number){
    if(numero < 1) return false;
    if(numero == 2) return true;
    let es_primo = true;
    for(let i = 2; i<numero ; i++){
      if(numero % 2 === 0){
        es_primo = false;
        break
      }
    }
    return es_primo;
  }

  esPrimo(numero: number) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

}
