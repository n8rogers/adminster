import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments.component';
import { AssignmentsRoutingModule } from './assignments-routing';

@NgModule({
  imports: [
    AssignmentsRoutingModule,
    CommonModule
  ],
  declarations: [AssignmentsComponent]
})
export class AssignmentsModule { }
