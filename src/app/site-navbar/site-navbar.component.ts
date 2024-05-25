import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-site-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.scss'
})
export class SiteNavbarComponent {

  shouldAddClass: boolean = false;
  // brand name
  brandName: string = "Brand Name";
  navList: any[] = [
    {
      id: 1,
      title: "About",
      link: "#"
    },
    {
      id: 2,
      title: "News",
      link: "#"
    },
    {
      id: 3,
      title: "Projects",
      link: "#"
    },
    {
      id: 4,
      title: "404",
      link: "#"
    },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.shouldAddClass = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0) > 100;
  }
}
