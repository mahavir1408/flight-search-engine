import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../shared/services';
import { FlightService } from '../../services';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'ng-flight-listing',
  templateUrl: './flight-listing.component.html'
})
export class FlightListingComponent implements OnInit, OnDestroy {

  private flightList: any = [];
  private flightSearchObject: any = {};
  private flightSubscriber: Subscription;
  private defaultRange: any = { range: [0, 10000] };

  constructor(
    private flightService: FlightService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getFlightListBySearchTab();
    this.getFlightListBySearchData();
    this.getFlightListBySearchRange();
  }

  ngOnDestroy() {
    this.flightSubscriber.unsubscribe();
  }

  private setFlightList(): void {
    this.flightSubscriber = this.flightService.getFlightsData(this.flightSearchObject).subscribe((response: any) => {
      const filteredResponse = response.filter((flight: any) => {
        const travelMode: Boolean = (this.flightSearchObject.travelMode === flight.travelMode);
        if (travelMode) {
          const withinRange = !!(flight.ticketCost > this.flightSearchObject.range[0] && flight.ticketCost <= this.flightSearchObject.range[1]);
          if (withinRange) {
            let searchCriteria: Boolean = false;
            searchCriteria = (
              !!(this.flightSearchObject.travelMode) ||
              !!(this.flightSearchObject.originCity) ||
              !!(this.flightSearchObject.destinationCity) ||
              !!(this.flightSearchObject.departureDate) ||
              !!(this.flightSearchObject.returnDate) ||
              !!(this.flightSearchObject.passengers)
            );
            
            const hasOriginCity: Boolean = (this.flightSearchObject.originCity === flight.origin);
            const hasDestinationCity: Boolean = (this.flightSearchObject.destinationCity === flight.destination);
            const hasDepartureDate: Boolean = (this.flightSearchObject.departureDate === moment(flight.departureDateTime).format('YYYY-MM-DD'));
            const hasReturnDate: Boolean = (this.flightSearchObject.returnDate === moment(flight.returnDateTime).format('YYYY-MM-DD'));
            const hasCapacity: Boolean = ((this.flightSearchObject.passengers > 0) && (this.flightSearchObject.passengers < flight.availableCapacity));

            if (searchCriteria && hasOriginCity) { return flight; }
            else if (searchCriteria && hasDestinationCity) { return flight; }
            else if (searchCriteria && hasDepartureDate) { return flight; }
            else if (searchCriteria && hasReturnDate) { return flight; }
            else if (searchCriteria && hasCapacity) { return flight; }
            else { return flight; }
          }

        }
          
          
        
        return false;
      });
      this.flightList = filteredResponse;
    });
  }

  private getFlightListBySearchRange(): void {
    this.flightSearchObject = Object.assign(this.flightSearchObject, this.defaultRange);
    this.searchService.getSearchRangeData().subscribe((response: any) => {
      if (response) {
        const o = { range: response };
        this.flightSearchObject = Object.assign(this.flightSearchObject, o);
      }
      this.setFlightList();
    });
  }

  private getFlightListBySearchData(): void {
    this.searchService.getSearchBoxData().subscribe((response: any) => {
      if (response) {
        response.departureDate = (response.departureDate) ? moment(response.departureDate).format('YYYY-MM-DD') : null;
        response.returnDate = (response.returnDate) ? moment(response.returnDate).format('YYYY-MM-DD') : null;
        this.flightSearchObject = Object.assign(this.flightSearchObject, response);
      }
      this.setFlightList();
    });
  }

  private getFlightListBySearchTab(): void {
    this.searchService.getSearchTabData().subscribe((response: any) => {
      if (response) {
        const travelMode = { travelMode: response };
        this.flightSearchObject = Object.assign(this.flightSearchObject, travelMode);
      }
      this.setFlightList();
    });
  }
}
