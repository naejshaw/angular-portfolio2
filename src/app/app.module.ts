import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CardComponent } from './components/cards-container/card/card.component';
import { PageButtonComponent } from './components/buttons-container/page-button/page-button.component';
import { ActionButtonComponent } from './components/buttons-container/action-button/action-button.component';
import { CardImageComponent } from './components/cards-container/card/card-image/card-image.component';
import { CardTitleComponent } from './components/cards-container/card/card-title/card-title.component';
import { CardContentComponent } from './components/cards-container/card/card-content/card-content.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardTextComponent } from './components/cards-container/card/card-text/card-text.component';
import { PaginationComponent } from './components/buttons-container/pagination/pagination.component';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import { DotsButtonComponent } from './components/buttons-container/dots-button/dots-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    CardComponent,
    PageButtonComponent,
    ActionButtonComponent,
    CardImageComponent,
    CardTitleComponent,
    CardContentComponent,
    CardsContainerComponent,
    CardTextComponent,
    PaginationComponent,
    ButtonsContainerComponent,
    DotsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
