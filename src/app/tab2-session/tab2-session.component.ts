import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-tab2-session',
  templateUrl: './tab2-session.component.html',
  styleUrls: ['./tab2-session.component.css']
})
export class Tab2SessionComponent implements OnInit {
  session: any;
  speakers: any;
  currentSpeakers: any;

  constructor(private dataService: DataService, private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => {
      this.session = JSON.parse(params['session']);
      console.log(this.session);
      if (this.speakers && this.session) {
        this.loadSpeakers();
      }
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.dataService.getSpeakers().subscribe(res => {
      this.speakers = Object.values(res);
    }, err => {
      console.log(err);
    }, () => {
      if (this.session.speakers) {
        this.filterSpeakersById(this.session.speakers);
      } else {
        this.currentSpeakers = [];
      }
    });
  }

  filterSpeakersById(sessionSpeakers) {
    let ids = sessionSpeakers.map(function(value, key) {
      return value;
    });

    this.currentSpeakers = this.speakers.filter(speaker => ids.includes(parseInt(speaker.id)));
  }

}
