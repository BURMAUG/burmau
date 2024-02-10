import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import {provideRouter} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
