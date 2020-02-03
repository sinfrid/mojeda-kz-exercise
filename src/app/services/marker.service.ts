import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  measurements: string = 'https://api.openaq.org/v1/measurements?country=FR';

constructor(private http: HttpClient,
        private popupService: PopupService) { }

  makeMarkers(map: L.map): void {

      this.http.get(this.measurements).subscribe((res: any) => {
      for (const c of res.results) {

        const lat = c.coordinates["latitude"];
        const lon = c.coordinates["longitude"];

        const circle = L.circleMarker([lat, lon])

        circle.bindPopup(this.popupService.makePopup(c));

        circle.addTo(map);

      }
    });
  }
}