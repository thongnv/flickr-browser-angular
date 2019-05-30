import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  url = 'https://www.flickr.com/services/feeds/photos_public.gne';

  constructor(
    private readonly http: HttpClient
  ) { }

  public search(input) {
    const url = this.searchUrl(input, this.url);
    return this.http.jsonp(url, 'jsoncallback');
  }

  private searchUrl(term, base) {
    const params = new HttpParams()
      .append('tags', term)
      .append('format', 'json');
    return `${base}?${params.toString()}`;
  }
}
