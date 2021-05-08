import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { House } from 'src/app/Models/house';
import { HouseDetailComponent } from '../house-detail/house-detail.component';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {

  @Input() house: House;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetails() {
    this.matDialog.open(HouseDetailComponent, { role: 'dialog', data: { house: this.house } })
  }
}
