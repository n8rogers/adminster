import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments.component';
import { routing } from './assignments-routing';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [AssignmentsComponent]
})
export class AssignmentsModule { }
