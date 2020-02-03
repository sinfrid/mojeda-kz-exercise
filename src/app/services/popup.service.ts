import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PopupService {

  constructor() { }

  makePopup(data: any): string {
debugger;

      return 
      "<div>Capital: ${ data.name }</div>" +
      "<div>State: ${ data.state }</div>" +
      "<div>Population: ${ data.population }</div>";
  }

}