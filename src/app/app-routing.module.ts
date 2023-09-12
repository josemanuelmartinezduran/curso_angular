import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { MaterialComponent } from './components/pages/material/material.component';
import { PromisesComponent } from './components/pages/promises/promises.component';

const routes: Routes = [
  { path: 'typescript', component: TypescriptComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'promises', component: PromisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
