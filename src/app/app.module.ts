import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ExtractAuthorPipe } from './extract-author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ExtractAuthorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
