import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { ViewChild, AfterViewInit } from "@angular/core";


@Component({
  selector: 'app-taxes-and-gst',
  template: `
    <barcode-scanner-livestream
      type="code_128"
      (valueChanges)="onValueChanges($event)"
      (started)="(onStarted)"
    ></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
      {{ barcodeValue }}
    </div>
  `,
  // templateUrl: './taxes-and-gst.component.html',
  styleUrls: ['./taxes-and-gst.component.scss']
})

export class TaxesAndGstComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;
 
  barcodeValue:any;
 
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
 
  onValueChanges(result:any) {
    this.barcodeValue = result.codeResult.code;
  }
 
  onStarted(started:any) {
    console.log(started);
  }
}

// export class TaxesAndGstComponent implements OnInit {

//   ewayBill:any;

//   taxRate=false;
//   taxRates(){this.taxRate=!this.taxRate}

//   taxGroups(templateRef:any){
//     let dialogRef = this.dialog.open(templateRef);
//   }

//   taxRatesDialog(templateRef:any){
//     let dialogRef = this.dialog.open(templateRef);
//   }

//   constructor(public dialog: MatDialog) { }

//   ngOnInit(): void {
//   }

// }
