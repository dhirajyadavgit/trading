import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-firms',
  templateUrl: './add-firms.component.html',
  styleUrls: ['./add-firms.component.scss']
})
export class AddFirmsComponent implements OnInit {

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  constructor(
    public dialogRef: MatDialogRef<AddFirmsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
