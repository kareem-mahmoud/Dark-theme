import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const API_KEY = 'cb0980e17da44338b1af48aa6a93a96f';
// const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cb0980e17da44338b1af48aa6a93a96f';

// const NEWS_URL = 'https://api.restful-api.dev/objects';


const NEWS_URL = 'https://dummyjson.com/posts';
// const NEWS_URL = 'http://gorest.co.in/public-api/posts/';
// const NEWS_URL = 'http://gorest.co.in/public-api/posts';

// const URL = "https://api.restful-api.dev/objects?id=3&id=5&id=10"

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // alllastest news api service 3 news
  GetNewsLastestList() {
    return this.http.get(NEWS_URL);
  }

  getProduct(id: string) {
    return this.http.get(NEWS_URL+"/"+id);
  }



}
