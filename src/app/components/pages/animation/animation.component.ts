import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'true',
        style({
          height: '4em',
          backgroundColor: 'green',
          color: 'white',
          opacity: 0.9,
        })
      ),
      state(
        'false',
        style({
          height: '1.2em',
          backgroundColor: 'blue',
          color: 'whitesmoke',
          opacity: 0,
        })
      ),
      transition('false => true', animate(500)),
      transition('true => false', animate(1000)),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0.0 }),
        animate('3000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('3000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AnimationComponent {
  isOpen: boolean = true;
  isShown = true;

  toggleAnimation() {
    this.isOpen = !this.isOpen;
  }

  hideDiv(){
    this.isShown = false;
  }

  showDiv(){
    this.isShown = true;
  }
}
