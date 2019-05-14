import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertten',
  templateUrl: './advertten.component.html',
  styleUrls: ['./advertten.component.css']
})
export class AdverttenComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
