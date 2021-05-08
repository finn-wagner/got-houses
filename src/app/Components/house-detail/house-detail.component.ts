import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  house: object = {};

  constructor(public dialogRef: MatDialogRef<HouseDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.house);
    for (let key in data.house) {
      const cleanKey = key.replace(/([A-Z]+)/g, ' $1').replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

      if(data.house[key] == "" || key == "url") {
        continue;
      } else if (key == "swornMembers" || key == "seats" || key == "titles") {
        this.house[cleanKey] = data.house[key].join(", ");
      } else {
        this.house[cleanKey] = data.house[key];
      }
    }
    console.log(this.house);
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
