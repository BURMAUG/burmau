import { Component } from '@angular/core';
import {Project} from "./component/projects/Project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'portfolio';
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
