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
import { PromisesComponent } from './components/pages/promises/promises.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/reuse/alert/alert.component';
import { PromptComponent } from './components/reuse/prompt/prompt.component';
import { RxjsComponent } from './components/pages/rxjs/rxjs.component';
import { InputsComponent } from './components/pages/inputs/inputs.component';
import { ReusableComponent } from './components/other/reusable/reusable.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BootsrapComponent } from './components/pages/bootsrap/bootsrap.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LogoutComponent } from './components/pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    InputComponent,
    MaterialComponent,
    TestComponent,
    PromisesComponent,
    AlertComponent,
    PromptComponent,
    RxjsComponent,
    InputsComponent,
    ReusableComponent,
    LoginComponent,
    BootsrapComponent,
    WelcomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
