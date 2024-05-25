import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NewsService } from '../services/news.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [NgIf],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.scss'
})
export class SingleNewsComponent implements OnInit {

  // data
  title = 'News';
  items:any;
  postId = this.route.snapshot.paramMap.get('id') ?? "";

  constructor(
    private route: ActivatedRoute, 
    private NewsList: NewsService
  ){}

  // single post render
  renderSingleNews() {
    this.NewsList.getProduct(this.postId).subscribe({
      next: (res) => {
        this.items = res;
        console.log(res)
      },
      error: (err) => {
        console.log("Error:", err);
      }
    });
  }


  ngOnInit(): void {
    this.renderSingleNews();
  }

}
