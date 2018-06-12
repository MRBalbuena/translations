import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslationsListComponent } from 'src/app/translations/translations-list/translations-list.component';
import { TranslationsContainerComponent } from 'src/app/translations/translations-container/translations-container.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services';
import { TranslationsInputComponent } from './translations/translations-input/translations-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TranslationsListComponent,
    TranslationsContainerComponent,
    TranslationsInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
