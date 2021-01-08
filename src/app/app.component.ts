import { Component, OnInit } from '@angular/core';
import { CommonService, SongDetails } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Random Song Title Generator';

  songArray: SongDetails[];

  constructor(private commonSvc: CommonService) {}

  ngOnInit() {
    this.commonSvc.initSongs();
    this.songArray = this.commonSvc.retrieveSongs();
  }
}
