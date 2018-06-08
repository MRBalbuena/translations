import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';

@Component({
  selector: 'app-translations-container',
  templateUrl: './translations-container.component.html',
  styleUrls: ['./translations-container.component.scss']
})
export class TranslationsContainerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getValues().subscribe(r => {
      console.log(r);
    });
  }

}
