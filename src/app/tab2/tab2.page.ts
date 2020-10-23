import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listSessions: any;

  constructor(private storageService: StorageService, private router: Router) {
    this.storageService.getObject("sessions").then(data => {
      this.listSessions = Object.values(data);
    });
  }
}
