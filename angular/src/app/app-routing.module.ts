import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'main'},
  { path: 'main', loadChildren: './main/main.module#MainModule' },
  { path: 'assignments', loadChildren: './assignments/assignments.module#AssignmentsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
