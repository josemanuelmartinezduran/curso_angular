import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { MaterialComponent } from './components/pages/material/material.component';
import { PromisesComponent } from './components/pages/promises/promises.component';
import { RxjsComponent } from './components/pages/rxjs/rxjs.component';
import { InputsComponent } from './components/pages/inputs/inputs.component';

const routes: Routes = [
  { path: 'typescript', component: TypescriptComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'inputs', component: InputsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
