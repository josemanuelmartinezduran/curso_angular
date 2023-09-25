import { Component } from "@angular/core";

@Component({
  selector: 'lightswitch-comp',
  template: `
    <div class="container">
    <button type="button" (click)="clicked()">Click me!</button>
    <span>{{message}}</span>
    </div>`
})

export class SwitchComponent {
  isOn = false;
  constructor(){this.isOn = false;}
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
