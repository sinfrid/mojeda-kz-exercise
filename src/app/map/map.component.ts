import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
declare let L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private params: ActivatedRoute, public router: Router) { }

  ngOnInit() {
     this.initMap();
  }
    initMap() {      
        const lat = (this.params.snapshot.paramMap.get('lat')) ? this.params.snapshot.paramMap.get('lat') : 41.00650212603;
        const lng = (this.params.snapshot.paramMap.get('lng')) ? this.params.snapshot.paramMap.get('lng') : 28.8530806151128;
        console.log("ruoute", this.router.url);
        const globalMap = L.map('mapContainer', {
            zoomControl: true,
            maxZoom: 21,
            minZoom: 4
        }).setView([lat, lng], 13);
        globalMap.zoomControl.setPosition('bottomright');
        const maplayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&hl=tr&x={x}&y={y}&z={z}', {
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxNativeZoom: 21,
            zIndex: 0,
            maxZoom: 21
        }).addTo(globalMap);

        const marker = L.marker(globalMap.getCenter(), {
            draggable: true,
            icon: L.icon({
                iconUrl: '/assets/img/pin-4ldpi.png',
                iconSize: [30, 35],
                iconAnchor: [30 / 2, 35],
            })
        }).addTo(globalMap);
    }
}