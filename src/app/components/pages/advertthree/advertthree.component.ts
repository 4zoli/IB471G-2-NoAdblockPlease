import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertthree',
  templateUrl: './advertthree.component.html',
  styleUrls: ['./advertthree.component.css']
})
export class AdvertthreeComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
