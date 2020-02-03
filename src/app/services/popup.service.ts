import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PopupService {

  constructor() { }

  makePopup(data: any): string {
return `` +
      `<div>Capital: ${ data.city }</div>` +
      `<div>State: ${ data.parameter }</div>` +
      `<div>Population: ${ data.value }</div>`
  }

}