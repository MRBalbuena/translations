import { Injectable } from '@angular/core';
import { trsConfig, trsEnv } from '../shared/index';
import { HttpClient } from '@angular/common/http';
import { TRANSLATIONS } from '../shared/constants';
import { Observable, Subject } from '../../../node_modules/rxjs';


@Injectable()
export class DataService {

    baseUrl = trsConfig.endPoint[trsEnv];
    constructor(private http: HttpClient) { }

    getValues() {
        const getValuesUrl = this.baseUrl + 'values';
         return this.http.get(getValuesUrl);
    }

    getTranslations(): Observable<string[]> {
        // eturn translations; // this pass to be an observable
        return new Observable(trans => {
            setTimeout(() => {
                trans.next(TRANSLATIONS);
            }, 1000);
        });
    }
}
