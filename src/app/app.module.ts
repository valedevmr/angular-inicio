import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { ElementosComponent } from './elementos/elementos.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementosComponent
  ],
  imports: [
    BrowserModule,
    TarjetaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
