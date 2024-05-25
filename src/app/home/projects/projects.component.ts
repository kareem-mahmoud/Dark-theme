import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent{

  title: string = 'Feature Projects';
  projectsList: string[] = [
    "./assets/projects/p1.webp",
    "./assets/projects/p2.webp",
    "./assets/projects/p3.webp",
    "./assets/projects/p4.webp",
    "./assets/projects/p5.webp"
  ]

  constructor(){}




}
