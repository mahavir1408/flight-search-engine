import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

@Injectable()

export class FlightService {

  constructor(private http: HttpClient) {
  }

  public getFlightsData(searchBy?: any): Observable<any> {
    return this.http.get("/assets/data/flight.json").pipe(
      catchError((error: any): any => {
        const message = `Error in getFlightsData() service`;
        return Observable.throw(message);
      })
    );  
  }
}