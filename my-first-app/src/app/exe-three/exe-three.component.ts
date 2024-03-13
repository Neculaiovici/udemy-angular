import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-three',
  templateUrl: './exe-three.component.html',
  styleUrls: ['./exe-three.component.css']
})
export class ExeThreeComponent implements OnInit {

  shwoSecret: boolean = false;
  logs: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.shwoSecret = !this.shwoSecret;
    this.logs.push(this.logs.length + 1);
  }
}
