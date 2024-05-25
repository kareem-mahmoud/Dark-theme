import { Component } from '@angular/core';
import { LogosListComponent } from './logos-list/logos-list.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { VideoServiceComponent } from './video-service/video-service.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { LastestNewsComponent } from './lastest-news/lastest-news.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LogosListComponent,
    OurServicesComponent,
    VideoServiceComponent,
    OurTeamComponent,
    LastestNewsComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
