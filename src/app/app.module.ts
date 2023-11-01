import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponentComponent } from './components/teste.component/teste.component.component';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CardComponent } from './components/card/card.component';
import { PageButtonComponent } from './components/page-button/page-button.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponentComponent,
    IndexComponent,
    HomeComponent,
    ContentComponent,
    CardComponent,
    PageButtonComponent,
    ActionButtonComponent,
    CardImageComponent,
    CardTitleComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
