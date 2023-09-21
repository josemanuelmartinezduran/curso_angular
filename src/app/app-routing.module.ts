import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { MaterialComponent } from './components/pages/material/material.component';
import { PromisesComponent } from './components/pages/promises/promises.component';
import { RxjsComponent } from './components/pages/rxjs/rxjs.component';
import { InputsComponent } from './components/pages/inputs/inputs.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BootsrapComponent } from './components/pages/bootsrap/bootsrap.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { TemplateComponent } from './components/templates/template/template.component';
import { TableroComponent } from './components/pages/tablero/tablero.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';

const routes: Routes = [
  { path: 'typescript', component: TypescriptComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'bootstrap', component: BootsrapComponent },
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'tablero', component: TableroComponent },
  { path: 'd', component: TemplateComponent, children: [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'tablero', component: TableroComponent },
    { path: 'pipes', component: PipesComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
