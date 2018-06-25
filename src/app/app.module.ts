import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { FlightService } from './services';
import { FlightListingComponent, FlightComponent } from './components';
import { 
  SearchBoxComponent,
  SearchDetailsComponent,
  SearchRangeComponent,
  SearchTabComponent,
  HeaderComponent
} from './shared/components';
import { SearchService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightListingComponent,
    HeaderComponent,
    SearchBoxComponent,
    SearchDetailsComponent,
    SearchRangeComponent,
    SearchTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NouisliderModule
  ],
  providers: [
    FlightService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
