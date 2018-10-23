import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ng-search-range',
  templateUrl: './search-range.component.html',
  providers: [FormBuilder]
})
export class SearchRangeComponent implements OnInit {

  @Output() emitSearchRangeData: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: any;

  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 10000],
    keyboard: true, 
    step: 500,
    pageSteps: 10,
    range: {
      min: 0,
      max: 10000
    },
    pips: {
      mode: 'steps',
      density: 5,
    }
  };
  
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.getRange();
  }

  public createForm() {
    this.searchForm = this.formBuilder.group({
      flightRange: []
    });
  }

  public getRange(): any {
    this.searchForm.valueChanges.subscribe(() => {
      const searchRange = this.searchForm.controls['flightRange'].value;
      this.emitSearchRangeData.emit(searchRange);
    });
  }
}
