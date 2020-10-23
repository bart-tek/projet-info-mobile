import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listSessions: any;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getSessions().subscribe(res => {
      this.listSessions = Object.values(res);
    });
  }
}
