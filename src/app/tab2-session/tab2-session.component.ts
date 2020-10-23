import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab2-session',
  templateUrl: './tab2-session.component.html',
  styleUrls: ['./tab2-session.component.css']
})
export class Tab2SessionComponent implements OnInit {
  @Input() session: any;
  
  constructor() { }

  ngOnInit() {
  }

}
