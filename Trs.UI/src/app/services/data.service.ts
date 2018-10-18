import { Injectable } from '@angular/core';
import { trsConfig, trsEnv } from '../shared/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TRANSLATIONS } from '../shared/constants';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { ITranslation } from '../shared/translations.models';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    baseUrl = trsConfig.endPoint[trsEnv];

    private httpGet(url: string) {
        return this.http.get(url);
    }

    httpPost(url: string, body: any): Observable<any> {
        const options = { headers: this.getHeader() };
        return this.http.post(url, body, options);
    }

    getHeader(): HttpHeaders {
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        });
     }

    getValues() {
        const getValuesUrl = this.baseUrl + 'values';
         return this.http.get(getValuesUrl);
    }

    getTranslations(): Observable<any> {
        return this.httpGet('http://localhost:5000/api/translations/');
        // return this.httpPost('http://localhost:5000/api/translations/test', null);
    }

    saveTranslation(translation: ITranslation) {
        return this.httpPost('http://localhost:5000/api/translations/save', translation);
        // return this.httpPost('http://localhost:5000/api/translations/save', null);
    }
}
