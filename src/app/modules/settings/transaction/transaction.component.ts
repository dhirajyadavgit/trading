import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionalFieldsComponent } from './features/additional-fields/additional-fields.component';
import { SetPaymentTermsComponent } from './features/set-payment-terms/set-payment-terms.component';
import { SET } from './features/set-payment-terms/SET.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  checked:boolean= false;
  showSPT:any;
  isHidden=true;
  sales:Array<string>;
  saleOrder:Array<string>;
  txt : any="Count";
  s=new SET();
  checkTNStatus:any;
  checkVNStatus:any;
  checkDDStatus:any;
  checkDLStatus:any;
  checkF5Status:any;
  checkF6Status:any;
  checkShippingStatus:any;
  checkPackagingStatus:any;
  checkAdjustmentStatus:any;
  checkOCStatus:any;

  
  constructor(private dialog: MatDialog) { 
    this.sales = [
      'abc','xyz'
    ];
    this.saleOrder = [
      'sid','dh'
    ];
  }
 

  ngOnInit(): void {
    // this.saleForm = this.fb.group({
    //   saleControl:['this.sales[1]']
    // });
  }

  addSaleOrder(saleorderitem:any,saleOrder:any){
    if(saleOrder!==null){
      this.saleOrder.push(saleOrder);
      saleorderitem.value="";
    }
   }

   delSOItem(SOI:any){
    this.saleOrder.splice(SOI,1);
   }

 addSale(saleitem:any,sales:any){
  if(sales!==null){
    this.sales.push(sales);
    saleitem.value="";
  }
 }
 delSItem(index:any){
  this.sales.splice(index,1);
 }

 fnChangeVal(value:any){
   console.log(value);
   this.txt=value.target.value;
 }

  changeCheck(event:any){
    this.checked = !event.checked;
  }

  

  fnOpenDialog(templateRef: any) {
    
    let dialogRef=this.dialog.open(templateRef);
  }


  SPTClick(){
    let dialogRef=this.dialog.open(SetPaymentTermsComponent);
  }

  fnOpenAF(){
    let dialogRef=this.dialog.open(AdditionalFieldsComponent,{disableClose:true});

  }

  fnHideRoundOfTotal(){
    this.isHidden=!this.isHidden;
  }

  fnOpenTransDetDialog(TransDetails:any){
    let dialogRef=this.dialog.open(TransDetails,{disableClose:true});
  }
  fnOpenAddChargeDialog(AddCharges:any){
    let dialogRef=this.dialog.open(AddCharges,{disableClose:true});
  }
  
  
}
