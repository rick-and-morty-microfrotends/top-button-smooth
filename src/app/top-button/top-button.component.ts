import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TopButtonComponent {

  constructor() { }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
