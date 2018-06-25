import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import * as moment from 'moment';

@Component({
  selector: 'ng-search-details',
  templateUrl: './search-details.component.html'
})
export class SearchDetailsComponent implements OnInit{

  private flightSearchObject: any = {};

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getFlightListBySearchTab();
    this.getFlightListBySearchData();
  }

  private getFlightListBySearchData(): void {
    this.searchService.getSearchBoxData().subscribe((response: any) => {
      if (response) {
        response.departureDate = (response.departureDate) ? moment(response.departureDate).format('YYYY-MM-DD') : null;
        response.returnDate = (response.returnDate) ? moment(response.returnDate).format('YYYY-MM-DD') : null;
        this.flightSearchObject = Object.assign(this.flightSearchObject, response);
      }
    });
  }

  private getFlightListBySearchTab(): void {
    this.searchService.getSearchTabData().subscribe((response: any) => {
      if (response) {
        const travelMode = { travelMode: response };
        this.flightSearchObject = Object.assign(this.flightSearchObject, travelMode);
      }
    });
  }
}
