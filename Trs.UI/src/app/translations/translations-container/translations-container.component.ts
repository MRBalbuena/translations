import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';
import { TranslationsService } from '../../services/translations.service';
import { ITranslation } from '../../shared/translations.models';

@Component({
  selector: 'app-translations-container',
  templateUrl: './translations-container.component.html',
  styleUrls: ['./translations-container.component.scss']
})
export class TranslationsContainerComponent implements OnInit {

  constructor(private translationService: TranslationsService) { }

  translations: ITranslation[];
  
  ngOnInit() {
    this.translationService.getTranslations().subscribe(r => {
      this.translations = r;
    });
  }

}
