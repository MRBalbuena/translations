import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslationsListComponent } from 'src/app/translations/translations-list/translations-list.component';
import { TranslationsContainerComponent } from 'src/app/translations/translations-container/translations-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationsListComponent,
    TranslationsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
