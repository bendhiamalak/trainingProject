import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from "@angular/core";
import { Observable, fromEvent, map } from "rxjs";
import { HeaderComponent } from "../component/header/header.component";
import { HomeComponent } from "../component/home/home.component";
import { NumbersComponent } from "../component/numbers/numbers.component";
import { ProjectsComponent } from "../component/projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, NumbersComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'animatedAngular';

 

  activeNavItem: string = "home"; // Set the default active navigation item

  @HostListener("window:scroll", []) onScroll(): void {
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");
    

   
  }

  isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  }

  constructor() {}

  ngOnInit(): void {}

  

  navBarTogglerIsVisible() {
    return 
  }

  collapseNav() {
    
  }

 

}
