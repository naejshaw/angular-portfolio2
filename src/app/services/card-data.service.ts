import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private cardsData: any[] = [];

  constructor() {
    for (let i = 1; i <= 30; i++) {
      this.cardsData.push({
        cardImageId: `https://github.com/naejshaw/angular-portfolio2/blob/main/src/assets/images/${i}.jpg?raw=true`,
        cardTitle: `Card ${i}`,
        cardText: `This is a brief text for Card ${i}.`
      });
    }
  }

  getCardsData(): any[] {
    return this.cardsData;
  }
}
