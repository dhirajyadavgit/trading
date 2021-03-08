import { Component, OnInit } from '@angular/core';
import { SET } from './SET.model'; 
@Component({
  selector: 'app-set-payment-terms',
  templateUrl: './set-payment-terms.component.html',
  styleUrls: ['./set-payment-terms.component.scss']
})
export class SetPaymentTermsComponent implements OnInit {

  s = new SET();  
  datarray=[];
  constructor() { }

  ngOnInit(): void {
    this.datarray.push();
  }
  addForm(){
    this.s=new SET()
    this.datarray.push();
  }
}
