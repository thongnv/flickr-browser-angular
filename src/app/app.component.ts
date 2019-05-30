import { Component, OnInit } from '@angular/core';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  results = [];

  constructor(
    private readonly flickrService: FlickrService
  ) {}

  ngOnInit() {
    this.flickrService.search('').subscribe((data: any) => {
      this.results = data.items;
    });
  }

  searchData(event): void {
    const searchText = event.target.value;
    this.flickrService.search(searchText).subscribe((data: any) => {
      this.results = data.items;
    });
  }

}
