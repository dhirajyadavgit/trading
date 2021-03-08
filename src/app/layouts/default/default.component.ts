import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  password:string="12345";
  cpassword:string="12345";

  passcode()
  {
    if(this.password=="12345" && this.cpassword=="12345")
    {

    }
    else
    {
      window.location.href="http://localhost:4200";
    }
  }

  sideBarOpen=true;
  constructor() { }
  sideBarToggler()
  {
    this.sideBarOpen = !this.sideBarOpen; 
  }

  ngOnInit(): void {
  }

}
