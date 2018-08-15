import { Injectable } from '@angular/core';
import { DataService } from '.';

@Injectable()
export class TranslationsService {
    constructor(private dataService: DataService) { }

    getTranslations() {
        return this.dataService.getTranslations();
    }
}
