import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertseven',
  templateUrl: './advertseven.component.html',
  styleUrls: ['./advertseven.component.css']
})
export class AdvertsevenComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
