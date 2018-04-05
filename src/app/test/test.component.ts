import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sept', 'oct', 'nov', 'dec'];
  isavailable = true;
  constructor() { }
  ngOnInit() {
  }

  onClick(event) {
    alert('button is clicked');
    this.isavailable = false;
    return false;
  }
  changemonth(e) {
    console.log("Changed month from the Dropdown");
    console.log(this.months[1]);
    return true;
  }
}
