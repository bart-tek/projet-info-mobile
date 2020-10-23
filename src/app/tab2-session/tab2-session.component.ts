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

  constructor(private dataService: DataService, private _route: ActivatedRoute) {
    this.dataService.getSpeakers().subscribe(res => {
      this.speakers = Object.values(res);
    });
  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.session = JSON.parse(params['session']);
      this.filterSpeakersById(this.session.speakers);
      console.log(this.speakers);
    });
  }

  filterSpeakersById(ids) {
    this.speakers.filter(function(speaker) {
      if (ids.includes(speaker.id)) {
        return speaker;
      }
    });
  }

}
