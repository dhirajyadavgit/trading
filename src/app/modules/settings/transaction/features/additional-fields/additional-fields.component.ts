import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-additional-fields',
  templateUrl: './additional-fields.component.html',
  styleUrls: ['./additional-fields.component.scss']
})
export class AdditionalFieldsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  fnFirmAF1(AF1:any){
    let dialogRef=this.dialog.open(AF1);
  }
  fnFirmAF2(AF2:any){
    let dialogRef=this.dialog.open(AF2);
  }
  fnTransAF1(AF1:any){
    let dialogRef=this.dialog.open(AF1);

  }
  fnTransAF2(AF2:any){
    let dialogRef=this.dialog.open(AF2);

  }
  fnTransAF3(AF3:any){
    let dialogRef=this.dialog.open(AF3);

  }
  fnTransAF4(AF4:any){
    let dialogRef=this.dialog.open(AF4);

  }
}

