import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.scss']
})
export class PasscodeComponent implements OnInit {

  curr_pass="System";

  constructor() { }

  ngOnInit(): void {
  }

}