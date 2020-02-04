import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Country } from '../../classes/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {
  countries: Country[];
  private searchTerms = new Subject<string>();

  constructor(private countryService: CountryService) {}

  ngOnInit() {
   this.getCountries();
  }
    getCountries(): void {
    this.countryService.getHeroes()
    .subscribe(countries => this.countries = countries);
  }
}