import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent implements OnInit {

  @Input()
  cardText:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
