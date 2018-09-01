import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { ITranslation } from '../../shared/translations.models';

@Component({
  selector: 'app-translations-input',
  templateUrl: './translations-input.component.html',
  styleUrls: ['./translations-input.component.scss']
})
export class TranslationsInputComponent implements OnChanges {
  @Input() selectedTranslation: ITranslation;
  faArrowsAltV = faArrowsAltV;
  transText = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }

  isDisabled() {
    return this.selectedTranslation ? this.transText.length === 0 : true;
  }

  setSameText() {
    this.transText = this.selectedTranslation.translation;
  }
}
