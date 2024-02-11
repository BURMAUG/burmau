import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import {provideRouter} from "@angular/router";
import { ResearchComponent } from './component/research/research.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
