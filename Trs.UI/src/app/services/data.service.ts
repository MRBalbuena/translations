import { Injectable } from '@angular/core';
import { trsConfig, trsEnv } from '../shared/index';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

    baseUrl = trsConfig.endPoint[trsEnv];
    constructor(private http: HttpClient) { }

    getValues() {
        const getValuesUrl = this.baseUrl + 'values';
         return this.http.get(getValuesUrl);
    }
}
