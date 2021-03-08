import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { AddFirmsComponent } from 'src/app/modules/settings/features/add-firms/add-firms.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu = false;
  sign="add";

  constructor(public dialog: MatDialog) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  val:Boolean=false;
  btnclick(templateRef:any){
    
    if(!this.val)
    {
      let dialogRef = this.dialog.open(templateRef);
    }
    this.val = !this.val;
  }

  

  ngOnInit(): void {
  }

}
