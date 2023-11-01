import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  @Input()
  action:string =""
  @Input()
  actionAbrev:string =""
  @Input()
  selection:string =""
  @Input()
  status:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
