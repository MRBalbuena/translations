import { Component, Input, OnChanges, SimpleChanges, SimpleChange, Output } from '@angular/core';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
import { ITranslation } from 'src/app/shared/translations.models';

@Component({
  selector: 'app-translations-input',
  templateUrl: './translations-input.component.html',
  styleUrls: ['./translations-input.component.scss']
})
export class TranslationsInputComponent implements OnChanges {
  @Input() selectedTranslation: ITranslation;
  @Output() saveTranslation = new EventEmitter<ITranslation>();

  faArrowsAltV = faArrowsAltV;
  transText = '';
  translation: ITranslation;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentValue) {
      this.translation = <any> changes.currentValue;
      this.transText = this.translation.originalText;
    }
  }

  isDisabled() {
    return this.selectedTranslation ? this.transText.length === 0 : true;
  }

  setSameText() {
    this.transText = this.selectedTranslation.originalText;
  }

  setTranslation(text: string) {
    this.selectedTranslation.translatedText = text;
    this.saveTranslation.emit(this.selectedTranslation);
  }
}
