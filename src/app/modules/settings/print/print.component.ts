import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrintdialogComponent } from './features/printdialog/printdialog.component';
import { ThrprtdialogComponent } from './features/thrprtdialog/thrprtdialog.component';
import { TrsdialogComponent } from './features/trsdialog/trsdialog.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

 
  // here is table row colum hide/show function and their variable declation 

  isfirst: boolean = false;
  isitemno: boolean = false;
  isitemcode: boolean = false;
  ishsnsac: boolean = false;
  iscount: boolean = false;
  isbatchno: boolean = false;
  isexpdt: boolean = false;
  ismfgdt: boolean = false;
  ismrp: boolean = false;
  issize: boolean = false;
  isquantity: boolean = false;
  isprice: boolean = false;
  isdiscount: boolean = false;
  istaxable: boolean = false;
  isamount: boolean = false;
  showfirst() { this.isfirst = !this.isfirst; }
  showitemno() { this.isitemno = !this.isitemno; }
  showittemcode() { this.isitemcode = !this.isitemcode; }
  showhsnsac() { this.ishsnsac = !this.ishsnsac; }
  showcount() { this.iscount = !this.iscount; }
  showbatchno() { this.isbatchno = !this.isbatchno; }
  showexpdt() { this.isexpdt = !this.isexpdt; }
  showmfgdt() { this.ismfgdt = !this.ismfgdt; }
  showmrp() { this.ismrp = !this.ismrp; }
  showsize() { this.issize = !this.issize; }
  showquantity() { this.isquantity = !this.isquantity; }
  showprice() { this.isprice = !this.isprice; }
  showdiscount() { this.isdiscount = !this.isdiscount; }
  showtaxable() { this.istaxable = !this.istaxable; }
  showamount() { this.isamount = !this.isamount; }

 // here is only hide/show function and their variable declation

  islogo: boolean = false;
  iscompname: boolean = false;
  isphoneno: boolean = false;
  isaddress:boolean= false;
  isemail:boolean=false;
  isgstin:boolean=false;
  isprtog: boolean = false;
  isamtwithgrp: boolean = false;
  ispaymentmode: boolean = false;
  isprtdesc: boolean = false;
  isupicode: boolean = false;
  issignature: boolean = false;
  showcode() { this.islogo = !this.islogo }
  showcompname() { this.iscompname = !this.iscompname }
  showphno() { this.isphoneno = !this.isphoneno };
  showaddress(){this.isaddress=!this.isaddress};
  showemail(){this.isemail=!this.isemail};
  showgstin(){this.isgstin=!this.isgstin};
  showprtog() { this.isprtog = !this.isprtog };
  showamtwithgrp() { this.isamtwithgrp = !this.isamtwithgrp };
  showpaymentmode() { this.ispaymentmode = !this.ispaymentmode };
  showprtdesc() { this.isprtdesc = !this.isprtdesc };
  showupicode() { this.isupicode = !this.isupicode };
  showsignature() { this.issignature = !this.issignature };

  isgstone: boolean = true;
  isgsttwo: boolean = false;
  isgstthree: boolean = false;
  showgstone() {
    this.isgstone = true;
    this.isgsttwo = false;
    this.isgstthree = false;
  };
  showgsttwo() {
    this.isgstone = false;
    this.isgsttwo = true;
    this.isgstthree = false;
  };
  showgstthree() {
    this.isgstthree = true;
    this.isgsttwo = false;
    this.isgstone = false;
  }
  // here is only hide/show function and their variable declation end here
  constructor(public dialog: MatDialog) { }

  // color pad code is here
  iscolor: string | any;
  changered() { this.iscolor = "red"; }
  changegreen() { this.iscolor = "green" }
  changeblue() { this.iscolor = "blue" }
  changeorange() { this.iscolor = "orange" }
  changepink() { this.iscolor = "pink" }

  //  here is checkbox value print in htmlform code and decleration 
  compname = "";
  phoneno = "";
  sign = "";
  address="";
  email="";
  gstin="";
  getcompvalue(val: string) {
    this.compname = val;
  }
  getphno(val: string) {
    this.phoneno = val;
  }
  getsignaturevalue(value: string) {
    this.sign = value;
  }
  getaddress(val:string){
    this.address = val;
  }
  getemail(val:string){
    this.email = val;
  }
  getgstin(val:string){
    this.gstin = val;
  }

  //  here is checkbox value print in form code and decleration end here

  // is is all dialog boxes code and declaration 
  isChecked = false;
  openDialog(param: any) {
    if (param.checked) {
      this.dialog.open(PrintdialogComponent,{disableClose:true});
    }
  }
  trsDialog() {
    const dialogRef = this.dialog.open(TrsdialogComponent,{disableClose:true});
  }
  TblcustDialog(openDialogTable: any) {
    let dialogRef = this.dialog.open(openDialogTable,{disableClose:true});
  }
  TermconDialog(openTermCondDialog: any) {
    let dialogRef = this.dialog.open(openTermCondDialog,{disableClose:true});
  }

  // here it is all dialog boxes code and declaration 

  // All the code and decleartion about thermal printer is here 
  isCheckedthermal = false;
  openDialogthermal(param: any) {
    if (param.checked) {
      this.dialog.open(ThrprtdialogComponent);
    }
  }

  // hide and show of thermal printer is here

  istotalrow:boolean=false;
  isrecamt:boolean=false;
  isblcamt:boolean=false;
  iscrtblc:boolean=false;
  istaxdetail:boolean=false;
  isdesc:boolean=false;

  showtotalrow(){this.istotalrow=!this.istotalrow};
  showrecamt(){this.isrecamt=!this.isrecamt};
  showblcamt(){this.isblcamt=!this.isblcamt};
  showcurrblc(){this.iscrtblc=!this.iscrtblc};
  showtaxdetail(){this.istaxdetail=!this.istaxdetail};
  showdesc(){this.isdesc=!this.isdesc};


  isintxtsize: boolean = false;
  istxtsize:boolean=false;
  showtxtsize(){this.istxtsize=!this.istxtsize;}
  showintxtsize() {this.isintxtsize = !this.isintxtsize; }

  iscompnamet:boolean=false;
  showcompnamet(){
    this.iscompnamet=!this.iscompnamet;
  }
  isphnot:boolean=false;
  showphnot(){
    this.isphnot=!this.isphnot;
  }
  isaddresst:boolean=false;
  showaddresst(){
    this.isaddresst=!this.isaddresst;
  }
  isemailt:boolean=false;
  showemailt(){
    this.isemailt=!this.isemailt;
  }
  isgstint:boolean=false;
  showgstint(){
    this.isgstint=!this.isgstint;
  }


  cmpnamet = "";
  phonenot = "";
  emailt = "";
  addresst="";
  gstin="";
  getcompvaluet(value: string) {
    this.cmpnamet = value;
  }
  getphnot(value: string) {
    this.phonenot = value;
  }
  getemailvaluet(value: string) {
    this.emailt = value;
  }
  getaddressvaluet(value:string){
    this.addresst = value;
  }
  getgstinvaluet(value:string){
    this.gstin= value;
  }

  // thermal printer declearation code end herer

  ngOnInit(): void {
  }

}
