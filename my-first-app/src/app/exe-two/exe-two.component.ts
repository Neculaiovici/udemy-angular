import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-two',
  templateUrl: './exe-two.component.html',
  styleUrls: ['./exe-two.component.css']
})
export class ExeTwoComponent implements OnInit {

  username:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName() {
    this.username = '';
  }

}
