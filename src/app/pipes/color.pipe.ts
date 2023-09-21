import { Pipe, PipeTransform } from '@angular/core';
import { ColorService } from '../services/color.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  constructor(
    private colorService: ColorService,
    private sanitizer: DomSanitizer
  ) {}

  transform(value: String): SafeHtml {
    const colorArray: String[] = value.split(',');
    let returnString = '';
    colorArray.forEach((elemento: String) => {
      const colorCode: String = this.colorService.getStringColor(elemento);
      returnString += `<span class='${elemento}' style="background-color: ${colorCode}">${elemento}</span>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(returnString);
  }
}
