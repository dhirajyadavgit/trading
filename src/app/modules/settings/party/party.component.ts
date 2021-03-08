import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {


  isChecked=true;
  shipping:any;
  payment:boolean = true;
  dialogRef: any;
  auto()
  {
    this.payment = ! this.payment;
  }

  onNoClick(templateRef:any): void {
    this.dialogRef.close(templateRef);
  }

  btnclick(templateRef:any){
    let dialogRef = this.dialog.open(templateRef);
  }

  disable=true;
  disable2=true;
  disable3=true;
  disable4=true;
  disable5=true;

  dis()
  {
    this.disable = !this.disable;
  }
  dis2()
  {
    this.disable2 = !this.disable2;
  }
  dis3()
  {
    this.disable3 = !this.disable3;
  }
  dis4()
  {
    this.disable4 = !this.disable4;
  }
  dis5()
  {
    this.disable5 = !this.disable5;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
