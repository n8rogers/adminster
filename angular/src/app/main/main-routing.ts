import { MainComponent } from "./main.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";


const routes: Routes = [
    { path: '', component: MainComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);