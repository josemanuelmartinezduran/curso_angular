import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/pages/test/test.component';
import { ListaAlumnosComponent } from './components/pages/lista-alumnos/lista-alumnos.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
