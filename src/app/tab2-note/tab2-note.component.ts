import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../dataService.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab2-note',
  templateUrl: './tab2-note.component.html',
  styleUrls: ['./tab2-note.component.scss']
})

export class Tab2NoteComponent implements OnInit {

  sessionTitle: any;
  speakers: any;
  currentSpeakers: any;
  textArea: any;
  storageNoteKey: any;
  
  constructor(private storageService: StorageService, private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => {
      this.sessionTitle = JSON.parse(params['session']).title;
      this.storageNoteKey = "__" + this.sessionTitle + "__";
      this.loadNote();
    }, err => {
      console.log(err);
    },
    );
  }
  
  ngOnInit() {
  }
  
  saveNote() {
    console.log("title : " + this.storageNoteKey);
    console.log("textArea : " + this.textArea);
    this.storageService.setString(this.storageNoteKey, this.textArea);
  }
  
  loadNote() {
    this.storageService.getString(this.storageNoteKey).then( note => {

      console.log(note);

      if (note != undefined) {
        this.textArea = note.value;
      }
      else {
        this.textArea = "";
      }
    });
    
  }
}
