import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent implements AfterViewInit {

  title: string = 'Meet Our Team';

  @ViewChild('originalItem', {static: true})
  originalItemRef!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    const originalItem = this.originalItemRef.nativeElement;
    const clonedItem = originalItem.cloneNode(true) as HTMLImageElement;
    const clonedItemNext = originalItem.cloneNode(true) as HTMLImageElement;
    originalItem.parentNode?.appendChild(clonedItem);
    originalItem.parentNode?.appendChild(clonedItemNext);
  }
}
