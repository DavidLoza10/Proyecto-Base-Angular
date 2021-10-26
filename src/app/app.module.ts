import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario-suma/formulario.component';
import { FormularioRestaComponent } from './formulario-resta/formulario-resta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioRestaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
