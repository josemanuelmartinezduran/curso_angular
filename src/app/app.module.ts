import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { InputComponent } from './components/other/input/input.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/pages/material/material.component';
import { TestComponent } from './components/dialogs/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    InputComponent,
    MaterialComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
