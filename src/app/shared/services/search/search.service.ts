import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchService {

  protected searchTabDataSubject: BehaviorSubject<any> = <BehaviorSubject<any>>new BehaviorSubject(null);
  protected searchBoxDataSubject: BehaviorSubject<any> = <BehaviorSubject<any>>new BehaviorSubject(null);
  protected searchRangeDataSubject: BehaviorSubject<any> = <BehaviorSubject<any>>new BehaviorSubject(null);

  public setSearchBoxData(data) {
    this.searchBoxDataSubject.next(data);
  }

  public getSearchBoxData(): Observable<any> {
    return this.searchBoxDataSubject.asObservable();
  }

  public setSearchRangeData(data) {
    this.searchRangeDataSubject.next(data);
  }

  public getSearchRangeData(): Observable<any> {
    return this.searchRangeDataSubject.asObservable();
  }

  public setSearchTabData(data) {
    this.searchTabDataSubject.next(data);
  }

  public getSearchTabData(): Observable<any> {
    return this.searchTabDataSubject.asObservable();
  }
}
