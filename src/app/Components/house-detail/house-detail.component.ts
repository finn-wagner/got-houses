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

    // Filter out unnecessary or non-existent key value pairs, prettify the key names and convert arrays for readability
    for (let key in data.house) {
      const cleanKey = key.replace(/([A-Z]+)/g, ' $1').replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

      if(data.house[key] == "" || data.house[key] == null || key == "url" || key == "name") {
        continue;
      } else if (key == "swornMembers" || key == "seats" || key == "titles" || key == "cadetBranches") {
        this.house[cleanKey] = data.house[key].join(", ");
      } else {
        this.house[cleanKey] = data.house[key];
      }
    }
  }

  ngOnInit(): void {
  }

  // Close the dialog
  close() {
    this.dialogRef.close();
  }

}
