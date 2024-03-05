import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule} from "ngx-pagination";

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import {provideRouter} from "@angular/router";
import { ResearchComponent } from './component/research/research.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { ResumeComponent } from './component/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ResearchComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
