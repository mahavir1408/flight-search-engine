import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-flight',
  templateUrl: './flight.component.html'
})

export class FlightComponent {

  @Input() flightInfo: any = {};

}
