import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logos-list',
  standalone: true,
  imports: [],
  templateUrl: './logos-list.component.html',
  styleUrl: './logos-list.component.scss'
})
export class LogosListComponent implements AfterViewInit{

  ulList: any = [
    {
      id: 1,
      title: 'Facebook',
      src: './assets/slider-logos/facebook.svg'
    },
    {
      id: 2,
      title: 'Disney',
      src: './assets/slider-logos/disney.svg'
    },
    {
      id: 3,
      title: 'Airbnb',
      src: './assets/slider-logos/airbnb.svg'
    },
    {
      id: 4,
      title: 'Apple',
      src: './assets/slider-logos/apple.svg'
    },
    {
      id: 5,
      title: 'Spark',
      src: './assets/slider-logos/spark.svg'
    },
    {
      id: 6,
      title: 'Samsung',
      src: './assets/slider-logos/samsung.svg'
    },
    {
      id: 7,
      title: 'Quora',
      src: './assets/slider-logos/quora.svg'
    },
    {
      id: 8,
      title: 'Sass',
      src: './assets/slider-logos/sass.svg'
    }
  ]

  @ViewChild('originalList', { static: true })
  originalListRef!: ElementRef<HTMLUListElement>;

  ngAfterViewInit() {
    const originalList = this.originalListRef.nativeElement;
    const clonedList = originalList.cloneNode(true) as HTMLUListElement;
    originalList.parentNode?.appendChild(clonedList);
  }


}
