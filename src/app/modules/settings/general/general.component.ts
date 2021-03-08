import { Component} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasscodeComponent } from './features/passcode/passcode.component';
import {FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AddFirmsComponent } from './features/add-firms/add-firms.component';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  isChecked=false;
  currentDate =  Date.now();

  constructor(public dialog: MatDialog) {}
  
  openDialog(param:any) {
    console.log("param",param);
    if(param.checked)
    {
      this.dialog.open(PasscodeComponent);
    }
  }

  autoBackup:boolean = false;
  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  auto()
  {
    this.autoBackup = ! this.autoBackup;
  }
  
  openDialog2(){
    this.dialog.open(AddFirmsComponent,{disableClose:true});
  }
  btnclick(templateRef:any){
    let dialogRef = this.dialog.open(templateRef);
  }
  disableSelect = new FormControl(false);



  task: Task = {
    name: 'Delivery Challan',
    completed: false,
    color: 'accent',
    subtasks: [
      {name: 'Goods Return on Delivery Challan', completed: false, color: 'accent'},
      {name: 'Print amount in Delivery Challan', completed: false, color: 'accent'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }


}
