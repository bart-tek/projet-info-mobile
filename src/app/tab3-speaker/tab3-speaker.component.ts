import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../dataService.service';

const IMG_LINK = "https://devfest2018.gdgnantes.com/"

@Component({
  selector: 'app-tab3-speaker',
  templateUrl: './tab3-speaker.component.html',
  styleUrls: ['./tab3-speaker.component.scss']
})
export class Tab3SpeakerComponent implements OnInit {
  
  speaker: any;
  allSessions: any;
  speakerSessions: any;

  constructor(private dataService: DataService, private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => {
      this.speaker = JSON.parse(params['speaker']);
      this.speaker.photoUrl = IMG_LINK + this.speaker.photoUrl;
      this.loadSessions();
    },
    err => {
      console.log(err);
    });
  }
  
  ngOnInit() {
    this.loadSessions()
  }
  
  filterSessionsBySpeaker(id) {
    return this.allSessions.filter(session =>  {
      return session.speakers != undefined && session.speakers.includes(parseInt(id));
    });
  }

  loadSessions() {
    this.dataService.getSessions().subscribe(res => {
      this.allSessions = Object.values(res);
    }, err => {
      console.log(err);
    }, () => {
      this.speakerSessions = this.filterSessionsBySpeaker(this.speaker.id);
    });
  }
}
