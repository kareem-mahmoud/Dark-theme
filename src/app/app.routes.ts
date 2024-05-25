import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleNewsComponent } from './home/single-news/single-news.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'news/:id', component: SingleNewsComponent },
    { path: 'projects', component: OurProjectsComponent }
];
