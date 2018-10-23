import { Component } from '@angular/core';
import { SearchService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private searchService: SearchService) {
  }

  public searchRangeData(data: any) {
    this.searchService.setSearchRangeData(data);
  }
}
