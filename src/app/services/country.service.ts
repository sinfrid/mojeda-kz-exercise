import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './classes/country';


@Injectable({ providedIn: 'root' })
export class CountryService {

    private countryUrl = 'https://api.openaq.org/v1/countries';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getCountries (): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

}