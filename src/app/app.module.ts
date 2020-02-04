import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MarkerService } from './services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopupService } from './services/popup.service';
import { SearchCountryComponent } from './search/search-country/search-country.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '', component: MapComponent, children: [      
      { path: '', redirectTo:"", pathMatch:"full"}
    ]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule,
  HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ), LeafletModule.forRoot()],
  declarations: [AppComponent, MapComponent, 
  SearchCountryComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [MarkerService, PopupService]
})
export class AppModule { }
