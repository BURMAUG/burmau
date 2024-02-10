import { Component } from '@angular/core';
import {Project} from "./Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    new Project("Shadow Job Web Scraper", 'https://github.com/BURMAUG/Shadowy',['Python', 'slack', 'selenium']),
    new Project("Car Price Predictor ML", 'https://github.com/BURMAUG/CarPricePrediction', ['Python', 'slack', 'selenium'])
  ]

  get projectList(): Project[]{
    return this.projects;
  }
}
