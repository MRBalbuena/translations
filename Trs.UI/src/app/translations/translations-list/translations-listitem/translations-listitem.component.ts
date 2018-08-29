import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-translations-listitem',
  templateUrl: './translations-listitem.component.html',
  styleUrls: ['./translations-listitem.component.scss']
})
export class TranslationsListitemComponent implements OnInit {
  @Input()translation: string[];

  constructor() {}

  ngOnInit() {}

  selectTranslation() {
    console.log('ok');
  }
}
