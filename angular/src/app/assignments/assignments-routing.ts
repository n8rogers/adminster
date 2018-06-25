import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AssignmentsComponent } from "./assignments.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'assignments', component: AssignmentsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssignmentsRoutingModule {}