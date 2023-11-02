import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  @Input()
  itemLeft:string =""
  @Input()
  itemMiddle:string =""
  @Input()
  itemRight:string =""
  @Input()
  cardLeftContent:string =""
  @Input()
  cardMiddleContent:string =""
  @Input()
  cardRightContent:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
