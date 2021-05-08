import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  apiUrl: string = "https://www.anapioficeandfire.com/api/houses";

  cache: object = {};

  constructor(private http: HttpClient) { }

  // Get all houses from a PAGE with a fixed COUNT of elements
  getHouses(page: number, count: number) {
    return this.http.get(this.apiUrl + "?page=" + page + "&pageSize=" + count);
  }

  // Get the house to the corresponding URL
  getHouse(url: string) {
    if(this.cache[url]) {
      return of(this.cache[url]);
    } else {
      const observable = this.http.get(url);
      observable.subscribe((response: any) => this.cache[url] = response);
      return observable;
    }
  }
}
