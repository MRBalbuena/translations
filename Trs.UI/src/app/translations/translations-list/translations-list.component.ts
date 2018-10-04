import { Component, OnInit, Input } from '@angular/core';
import { ITranslation } from '../../shared/translations.models';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translations-list',
  templateUrl: './translations-list.component.html',
  styleUrls: ['./translations-list.component.scss']
})
export class TranslationsListComponent implements OnInit {
  @Input() translations: string[];
  constructor(private translationService: TranslationsService) { }

  tdClass = '';
  ngOnInit() {
  }

  onSelected(item: ITranslation) {
    this.tdClass = 'table-active';
    this.translationService.setSelectedTranslation(item);
  }
}
