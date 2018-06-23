import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AssignmentsComponent } from "./assignments.component";


const routes: Routes = [
    { path: '', component: AssignmentsComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);