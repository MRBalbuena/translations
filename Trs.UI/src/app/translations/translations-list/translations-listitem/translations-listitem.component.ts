import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ITranslation } from '../../../shared/translations.models';

@Component({
  selector: 'app-translations-listitem',
  templateUrl: './translations-listitem.component.html',
  styleUrls: ['./translations-listitem.component.scss']
})
export class TranslationsListitemComponent implements OnInit {
  @Input() translation: string[];
  @Output() selected = new EventEmitter<ITranslation>();

  constructor() {}

  ngOnInit() {}

  selectTranslation(translation: ITranslation) {
    this.selected.emit(translation);
  }

}
