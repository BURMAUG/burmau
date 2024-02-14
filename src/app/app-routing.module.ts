import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProjectsComponent} from "./component/projects/projects.component";
import {ResearchComponent} from "./component/research/research.component";
import {ResumeComponent} from "./component/resume/resume.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "research", component: ResearchComponent},
  {path: "resume", component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
