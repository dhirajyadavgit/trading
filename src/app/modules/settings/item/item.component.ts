import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  isChecked=true;
  
  show()
  {
    this.isChecked=!this.isChecked;
  }

  description=false;
  descEnable(){this.description=!this.description;}

  barCode=false;
  directBarCode=false;
  barcode(){this.barCode=!this.barCode;
  this.directBarCode=false}
  
  items=true;
  itemsUnit(){this.items=!this.items;
  this.defaultItems=false;
  }

  defaultItems=true;
  defaultUnit(){this.defaultItems=!this.defaultItems;}

  mrp=true;
  mrpDisable(){this.mrp=!this.mrp;}

  batch=true;
  batchDisable(){this.batch=!this.batch;}

  expDate=true;
  expDisable(){this.expDate=!this.expDate;}

  mfgDate=true;
  mfgDisable(){this.mfgDate=!this.mfgDate;}

  serialNo=true;
  serialDisable(){this.serialNo=!this.serialNo;}

  size=true;
  sizeDisable(){this.size=!this.size;}

  defaultUnitDialog(templateRef:any){
    let dialogRef = this.dialog.open(templateRef);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
