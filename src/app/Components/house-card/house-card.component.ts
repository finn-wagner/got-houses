import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/Models/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {

  @Input() house: House;

  constructor() { }

  ngOnInit(): void {
  }

}
