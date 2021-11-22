import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchCriteria: string = "";
  objs: any[] = [
    { id: 1, title: "ABC", count: 8},
    { id: 2, title: "DEF", count: -40},
    { id: 7, title: "wtf", count: -43},
    { id: 6, title: "hmm", count: 256},
    { id: 5, title: "OMG", count: 700},
    { id: 3, title: "XYZ", count: 22},
    { id: 4, title: "WOW", count: -50}
  ];
  aBool: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
