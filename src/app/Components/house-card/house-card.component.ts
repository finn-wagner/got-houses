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
    if(!this.loading()) {
      this.matDialog.open(HouseDetailComponent, { role: 'dialog', data: { house: this.house }, hasBackdrop: true , backdropClass: 'backdrop' })
    }
  }

  loading(): boolean {
    return (this.house.currentLord == "Loading...")
      || (this.house.heir == "Loading...")
      || (this.house.overlord == "Loading...")
      || (this.house.founder == "Loading...")
      || (this.house.cadetBranches == [])
    ;
  }
}
