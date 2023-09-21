import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  getStringColor(color: String) {
    if (color == 'Verde') return '#00FF00';
    if (color == 'Amarillo') return '#FFFF00';
    if (color == 'Azul') return '#0000FF';
    if (color == 'Rojo') return '#FF0000';
    if (color == 'Cyan') return '#00FFFF';
    if (color == 'Magenta') return '#FF00FF';
    return '#FFF';
  }
}
