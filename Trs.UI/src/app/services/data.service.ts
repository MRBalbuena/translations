import { Injectable } from '@angular/core';
import { trsConfig, trsEnv } from '../shared/index';
import { HttpClient } from '@angular/common/http';
import { TRANSLATIONS } from '../shared/constants';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { ITranslation } from '../shared/translations.models';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    baseUrl = trsConfig.endPoint[trsEnv];


    getValues() {
        const getValuesUrl = this.baseUrl + 'values';
         return this.http.get(getValuesUrl);
    }

    getTranslations(): Observable<any> {
        // eturn translations; // this pass to be an observable
        // return new Observable(trans => {
        //     setTimeout(() => {
        //         trans.next(TRANSLATIONS);
        //     }, 1000);
        // });

        return this.http.get('http://localhost:5000/api/translations/');
    }
}
