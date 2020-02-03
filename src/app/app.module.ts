import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { LayersComponent } from './map/layers/layers.component';
import { InvestmentComponent } from './map/investment/investment.component';
import { HomeComponent } from './pages/home/home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '', component: MapComponent, children: [      
      { path: '', redirectTo:"layers", pathMatch:"full"},
      { path: 'layers', component: LayersComponent },
      { path: 'investment', component: InvestmentComponent }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes
    ), LeafletModule.forRoot()],
  declarations: [AppComponent, InvestmentComponent, HomeComponent, MapComponent, NavbarComponent, LayersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
