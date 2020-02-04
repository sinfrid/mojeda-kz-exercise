import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './classes/country';


@Injectable({ providedIn: 'root' })
export class CountryService {

  private countryUrl = 'https://api.openaq.org/v1/countries';  // URL to web api
  private countries: Array<Country> = null;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getCountries (){

  return this.http.get(this.countryUrl);

    /*return this.http.get(this.countryUrl)
                    .map(res => <Country[]> res.json())
                    .do(countries => {
                      this.countries = countries;
                      console.log(countries);
                    });*/

      

  }

}