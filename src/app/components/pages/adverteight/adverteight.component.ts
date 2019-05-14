import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-adverteight',
  templateUrl: './adverteight.component.html',
  styleUrls: ['./adverteight.component.css']
})
export class AdverteightComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
