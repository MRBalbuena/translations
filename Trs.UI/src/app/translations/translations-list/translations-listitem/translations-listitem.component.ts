import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { ITranslation } from '../../../shared/translations.models';
import { TranslationState } from 'src/app/shared/enums';

@Component({
  selector: 'app-translations-listitem',
  templateUrl: './translations-listitem.component.html',
  styleUrls: ['./translations-listitem.component.scss']
})
export class TranslationsListitemComponent implements OnInit, OnChanges {
  @Input() translation: string[];
  @Output() selected = new EventEmitter<ITranslation>();

  tdClass = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('listItem.ngOnChanges');
  }

  selectTranslation(translation: ITranslation) {
    // this.tdClass = 'table-active';
    translation.status = TranslationState.selected;
    this.selected.emit(translation);
  }

}
