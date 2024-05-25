import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lastest-news',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './lastest-news.component.html',
  styleUrl: './lastest-news.component.scss'
})
export class LastestNewsComponent implements OnInit{

  title: string = "Lastest News";
  reversedList:Array<any> = [];

  constructor(private lastestNewsHome: NewsService) {}


  // render the last 3 posts for home page
  RenderLastestNewsForHome() {
    this.lastestNewsHome.GetNewsLastestList().subscribe({
      next: (responseList: any) => {
        this.reversedList = responseList.posts.reverse();
        console.log('List Loaded success');
        console.log(this.reversedList); 
      },
      error: (err) => {
        console.log("Error: " , err);
      }
    })
  }



  ngOnInit(): void {
    this.RenderLastestNewsForHome();
  }

}
