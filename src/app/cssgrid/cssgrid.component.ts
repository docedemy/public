import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssgrid',
  templateUrl: './cssgrid.component.html',
  styleUrls: ['./cssgrid.component.scss']
})
export class CssgridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  htmlString =
  `
  <div>Hello gowtham</div>
  <div>hello</div>`;
  
}
