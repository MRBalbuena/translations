import { Injectable } from '@angular/core';
import { DataService } from '.';
import { ITranslation } from '../shared/translations.models';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TranslationsService {
    constructor(private dataService: DataService) { }

    selectedTranslation: ITranslation;
    selectedTranslationSubject = new Subject<ITranslation>();

    currentTranslation = new Observable<ITranslation>(observer => {
        observer.next(this.selectedTranslation);
    });

    getTranslations() {
        return this.dataService.getTranslations();
    }

    setSelectedTranslation(translation: ITranslation) {
        this.selectedTranslationSubject.next(translation);
    }

    getSelectedTranslation(): Observable<ITranslation> {
        return this.selectedTranslationSubject.asObservable();
    }

    saveTranslation(translation: ITranslation) {
        return this.dataService.saveTranslation(translation);
    }
}
