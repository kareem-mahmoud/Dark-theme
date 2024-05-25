import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  title: string = "Our Services";
  servicesData: any = [
    {
      id: 1,
      category: 'customize',
      title: 'Blockchain development',
      img: './assets/services/customize.webp'
    },
    {
      id: 2,
      category: 'technology',
      title: 'Cutting-edge technology',
      img: './assets/services/technology.webp'
    },
    {
      id: 3,
      category: 'people',
      title: 'Professional team',
      img: './assets/services/people.webp'
    },
    {
      id: 4,
      category: 'support',
      title: 'End-to-end support',
      img: './assets/services/support.webp'
    }
  ]


}
