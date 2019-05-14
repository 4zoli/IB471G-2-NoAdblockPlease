import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertnine',
  templateUrl: './advertnine.component.html',
  styleUrls: ['./advertnine.component.css']
})
export class AdvertnineComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
