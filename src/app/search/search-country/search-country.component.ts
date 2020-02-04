import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Country } from '../../classes/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {

  countries = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {

   this.getCountries();

  }
    getCountries(): void {
        this.countryService.getCountries().subscribe((data: any[])=>{

      this.countries = data;
    })  
  }
}