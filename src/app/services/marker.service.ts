import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  measurements: string = 'https://api.openaq.org/v1/measurements?country=FR';

  constructor(private http: HttpClient) {
  }

  makeMarkers(map: L.map): void {
    
      this.http.get(this.measurements).subscribe((res: any) => {
      for (const c of res.results) {

        const lat = c.coordinates["latitude"];
        const lon = c.coordinates["longitude"];

        const marker = L.marker([lat, lon]);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
        marker.addTo(map);
        const circle = L.circleMarker([lat, lon]).addTo(map);
      }
    });
  }
}