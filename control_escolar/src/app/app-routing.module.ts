import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/pages/test/test.component';
import { ListaAlumnosComponent } from './components/pages/lista-alumnos/lista-alumnos.component';


const routes: Routes = [
  { path: '', component: ListaAlumnosComponent },
  { path: 'healthcheck', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
