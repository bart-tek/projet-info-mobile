import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';

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

  constructor(private storageService: StorageService, private _route: ActivatedRoute) {
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
    this.storageService.getObject("sessions").then(data => {
      this.allSessions = Object.values(data);
      this.speakerSessions = this.filterSessionsBySpeaker(this.speaker.id);
    });
  }
}
