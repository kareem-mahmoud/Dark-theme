import { Component } from '@angular/core';

@Component({
  selector: 'app-video-service',
  standalone: true,
  imports: [],
  templateUrl: './video-service.component.html',
  styleUrl: './video-service.component.scss'
})
export class VideoServiceComponent {
  title: string = 'Make the future happen';
  videoUrl: string = 'https://youtu.be/iNSa8oq4vYQ';
}
