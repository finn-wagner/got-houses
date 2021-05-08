import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  cache: object = {};

  constructor(private http: HttpClient) { }

  // Get the character corresponding to the URL
  getCharacter(url: string) {
    if(this.cache[url]) {
      return of(this.cache[url]);
    } else {
      const observable = this.http.get(url);
      observable.subscribe((response: any) => this.cache[url] = response);
      return observable;
    }
  }
}
