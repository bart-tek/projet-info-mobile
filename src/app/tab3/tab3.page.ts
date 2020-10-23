import { Component } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listSpeakers: any;
  rootPage: any;

  constructor(private storageService: StorageService) {
    this.storageService.getObject("speakers").then(data => {
      this.listSpeakers = Object.values(data);
    });
  }

}
