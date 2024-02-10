import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProjectsComponent} from "./component/projects/projects.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
