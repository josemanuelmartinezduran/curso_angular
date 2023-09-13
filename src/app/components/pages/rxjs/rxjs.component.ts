import { Component } from '@angular/core';
import { Observable, firstValueFrom, interval, lastValueFrom } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  async ngOnInit() {
    const source$:Observable<number> = interval(1000).pipe(
      map(n => n + 1),
      take(10)
    );

    source$.subscribe((value:number) => {
      console.log(value);
    });

    const inicio = await firstValueFrom(source$);
    console.log(`Inicio del observable ${inicio}`);

    const res = await lastValueFrom(source$);
    console.log(`Fin del observable ${res}`);
  }
}
