import { Component } from '@angular/core';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listSpeakers: any;
  rootPage: any;

  constructor(private dataService: DataService) {
    this.dataService.getSpeakers().subscribe(res => {
      this.listSpeakers = Object.values(res);
    });
  }

}
