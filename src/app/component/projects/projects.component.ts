import { Component } from '@angular/core';
import {Project} from "./Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    new Project("Shadow Job Web Scraper", 'This Program uses multithreading to visit select company career sites for select opportunities that suites me. Upon finding them it send me a Slack message','https://github.com/BURMAUG/Shadowy',['Python', ' Slack', ' Selenium']),
    new Project("Car Price Predictor ML",'Nottingham', 'https://github.com/BURMAUG/CarPricePrediction', ['Python', ' Numpy', ' Pandas', ' Seaborn'])
  ]

  get projectList(): Project[]{
    return this.projects;
  }
}
