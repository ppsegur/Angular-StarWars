import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'vehiculo', component: VehiculoComponent},
  {path: 'people', component: PeopleListComponent},
  {path: '', redirectTo: 'vehiculo', pathMatch: 'full'},
  {path:'**',component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
