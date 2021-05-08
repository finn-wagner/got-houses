import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  apiUrl: string = "https://www.anapioficeandfire.com/api/houses";

  constructor(private http: HttpClient) { }

  // Get all houses from a PAGE with a fixed COUNT of elements
  getHouses(page: number, count: number) {
    return this.http.get(this.apiUrl + "?page=" + page + "&pageSize=" + count);
  }

  // Get the house to the corresponding URL
  getHouse(url: string) {
    return this.http.get(url);
  }
}
