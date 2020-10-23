import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-tab2-session',
  templateUrl: './tab2-session.component.html',
  styleUrls: ['./tab2-session.component.css']
})
export class Tab2SessionComponent implements OnInit {
  @Input() session: any;
  speakers: any;

  constructor(private dataService: DataService) {
    this.dataService.getSpeakers().subscribe(res => {
      this.speakers = Object.values(res);
    });
    this.filterSpeakersById(this.session.speakers);
    console.log(this.speakers);
  }

  ngOnInit() {
  }

  filterSpeakersById(ids) {
    this.speakers.filter(function(speaker) {
      if (ids.includes(speaker.id)) {
        return speaker;
      }
    });
  }

}
