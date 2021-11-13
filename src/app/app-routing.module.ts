import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcoursComponent } from './concours/concours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditionsComponent } from './editions/editions.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "concours", component: ConcoursComponent },
  { path: "editions", component: EditionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
