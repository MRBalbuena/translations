import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslationsListComponent } from 'src/app/translations/translations-list/translations-list.component';
import { TranslationsContainerComponent } from 'src/app/translations/translations-container/translations-container.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services';
import { TranslationsInputComponent } from './translations/translations-input/translations-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslationsListitemComponent } from './translations/translations-list/translations-listitem/translations-listitem.component';
import { TranslationsService } from './services/translations.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

// Add an icon to the library for convenient access in other components
library.add(faArrowsAltV);

@NgModule({
  declarations: [
    AppComponent,
    TranslationsListComponent,
    TranslationsContainerComponent,
    TranslationsInputComponent,
    TranslationsListitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    DataService,
    TranslationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
