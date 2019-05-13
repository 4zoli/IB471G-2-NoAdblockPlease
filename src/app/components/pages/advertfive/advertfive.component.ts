import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertfive',
  templateUrl: './advertfive.component.html',
  styleUrls: ['./advertfive.component.css']
})
export class AdvertfiveComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }


}
