import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-adverttwo',
  templateUrl: './adverttwo.component.html',
  styleUrls: ['./adverttwo.component.css']
})
export class AdverttwoComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
