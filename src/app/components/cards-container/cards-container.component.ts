import { Component, Input, OnInit } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: any[] = [];
  pagedCards: any[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;
  totalPages: number = 10;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit(): void {
    this.cards = this.cardDataService.getCardsData();
    this.totalPages = Math.ceil(this.cards.length / this.itemsPerPage);
    this.updatePagedCards();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedCards();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedCards();
    }
  }

  updatePagedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedCards = this.cards.slice(startIndex, endIndex);
  }
}
