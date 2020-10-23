import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listSessions: any;

  constructor(private dataService: DataService) {
    this.dataService.getSessions().subscribe(res => {
      this.listSessions = Object.values(res);
    });
  }
}
