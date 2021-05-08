import { Component, OnInit } from '@angular/core';
import { House } from './Models/house';
import { CharacterService } from './Services/character.service';
import { HouseService } from './Services/house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GoT Houses';

  houses: House[] = [];
  houseCount: number = 50;
  page: number = 1;

  scrollDistance = 3;

  constructor(private houseService: HouseService, private characterService: CharacterService) {}

  // Load the first set of results on init of the application
  ngOnInit() {
    this.houseService.getHouses(this.page, this.houseCount).subscribe((response: any) => {
      this.houses = response.map(
        (house: any) => new House(house, this.houseService, this.characterService)
      );
    })
  }

  onScrolled() {
    this.page += 1;
    this.houseService.getHouses(this.page, 20).subscribe((data: any) => {
      this.houses = this.houses.concat(data.map((house: any) => new House(house, this.houseService, this.characterService)));
      console.log(this.houses);
    })
  }
}
