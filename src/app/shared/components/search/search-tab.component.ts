import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services';

@Component({
  selector: 'ng-search-tab',
  templateUrl: './search-tab.component.html'
})
export class SearchTabComponent implements OnInit {

  private travelMode: String = 'one-way';
  
  constructor( private searchService: SearchService ) {
  }

  ngOnInit() {
    
    this.searchService.setSearchTabData(this.travelMode);
  }

  public selectedTab(travelMode: String): void {
    this.travelMode = travelMode;
    this.searchService.setSearchTabData(this.travelMode);
    
  }

  public searchBoxData(data: any) {
    this.searchService.setSearchBoxData(data);
  }
}
