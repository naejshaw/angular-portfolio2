import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.css']
})
export class PageButtonComponent implements OnInit {

  @Input()
  pageId:string =""
  @Input()
  selection:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
