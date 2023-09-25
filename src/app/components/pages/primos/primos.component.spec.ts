import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimosComponent } from './primos.component';

describe('PrimosComponent', () => {
  let component: PrimosComponent;
  let fixture: ComponentFixture<PrimosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimosComponent]
    });
    fixture = TestBed.createComponent(PrimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería calcular los números primos en el rango [1-10]', () => {
    component.inicio = 1;
    component.fin = 10;
    component.calcularNumerosPrimos();
    expect(component.numerosPrimos).toEqual([2, 5, 7]);
  });

  it('debería calcular los números primos en el rango [20-30]', () => {
    component.inicio = 20;
    component.fin = 30;
    component.calcularNumerosPrimos();
    expect(component.numerosPrimos).toEqual([23, 29]);
  });
});
