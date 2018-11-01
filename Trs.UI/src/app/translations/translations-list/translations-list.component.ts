import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ITranslation } from '../../shared/translations.models';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translations-list',
  templateUrl: './translations-list.component.html',
  styleUrls: ['./translations-list.component.scss']
})
export class TranslationsListComponent implements OnInit, OnChanges {
  @Input() translations: string[];
  constructor(private translationService: TranslationsService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onSelected(item: ITranslation) {
    this.translationService.setSelectedTranslation(item);
  }
}
