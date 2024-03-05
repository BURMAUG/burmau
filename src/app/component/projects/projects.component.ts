import { Component } from '@angular/core';
import {Project} from "./Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    new Project(
      "Student Fullstack RESTapi",
      'This is a CRUD (Create, Read, Update, Delete) application designed to manage basic information of university students, including their name, email, and major. Users can perform various actions such as creating, reading, updating, and deleting student records via the appropriate REST endpoint',
      'https://github.com/BURMAUG/student-fullstack',
      ['Java', ' Spring Boot',' Reactjs',' Docker',' Gradle']),
    new Project(
      "Shadow Job Web Scraper",
      'This Program uses multithreading to visit select company career sites for select opportunities that suites me. Upon finding them it send me a Slack message',
      'https://github.com/BURMAUG/Shadowy',
      ['Python', ' Slack', ' Selenium']),
    new Project(
      "Car Price Predictor ML",'This project used data from Kaggle and pure Python to interpret data and make prediction about car prices that have not been seen before.',
      'https://github.com/BURMAUG/CarPricePrediction',
      ['Python', ' Numpy', ' Pandas', ' Seaborn', 'Kaggle dataset']),
    new Project(
      'Map Reduce MIT (Work In Progress)',
      'This is an implementation of the Map Reduce paper by Google',
      '',
      ['Go Language']
    ),
    new Project(
      'Microservice (Work In Progress)',
      'This is a Licensing Microservice that is to be built in a cloud native fashion', 'https://github.com/BURMAUG/microservice',
      ['Java', ' Spring Boot', ' Spring Cloud', ' Redis', ' Zookeeper']),
    new Project(
      'Library Management (Data Oriented Programming)',
      'This is a project by the book Data Oriented Programming.',
      'https://github.com/BURMAUG/LibraryDOP/tree/main',
      ['Java'])
  ]

  get projectList(): Project[]{
    return this.projects;
  }
}
