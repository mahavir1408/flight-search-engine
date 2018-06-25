import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'ng-search-box',
  templateUrl: './search-box.component.html',
  providers: [FormBuilder]
})
export class SearchBoxComponent implements OnInit {

  @Output() emitSearchBoxData: EventEmitter<any> = new EventEmitter<any>();
  private searchForm: any;
  
  constructor( private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.createForm();
    const defaultFormValues = this.searchForm.value;
    this.emitSearchBoxData.emit(defaultFormValues);
  }

  public createForm() {
    this.searchForm = this.formBuilder.group({
      originCity: ['pune'],
      destinationCity: ['delhi'],
      departureDate: [],
      returnDate: [],
      passengers: [],
      flightRange: []
    });
  }

  private search(value: any): void {
    this.emitSearchBoxData.emit(value);
  }
}
