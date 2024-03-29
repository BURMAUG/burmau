import { Component } from '@angular/core';
import {ProjectsComponent} from "../projects/projects.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected readonly Component = Component;
  protected readonly ProjectsComponent = ProjectsComponent;
}
