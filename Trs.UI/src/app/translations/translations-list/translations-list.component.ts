import { Component, OnInit, Input } from '@angular/core';
import { ITranslation } from '../../shared/translations.models';

@Component({
  selector: 'app-translations-list',
  templateUrl: './translations-list.component.html',
  styleUrls: ['./translations-list.component.scss']
})
export class TranslationsListComponent implements OnInit {
  @Input() translations: string[];
  constructor() { }

  ngOnInit() {
  }

  onSelected(item: ITranslation) {
    console.log(item);
  }
}
