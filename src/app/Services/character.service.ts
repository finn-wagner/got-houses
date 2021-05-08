import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  // Get the character corresponding to the URL
  getCharacter(url: string) {
    return this.http.get(url);
  }
}
