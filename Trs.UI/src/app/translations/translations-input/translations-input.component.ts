import { Component, OnInit } from '@angular/core';
import { faArrowsAltV, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-translations-input',
  templateUrl: './translations-input.component.html',
  styleUrls: ['./translations-input.component.scss']
})
export class TranslationsInputComponent implements OnInit {
  faArrowsAltV = faArrowsAltV;
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }

}
