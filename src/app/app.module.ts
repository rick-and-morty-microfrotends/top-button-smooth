import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { TopButtonComponent } from './top-button/top-button.component';

@NgModule({
  declarations: [
    TopButtonComponent,
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement
      (TopButtonComponent, { injector: this.injector });
    customElements.define('top-button-smooth', customElement);
  }

  ngDoBootstrap(): void { }
}
