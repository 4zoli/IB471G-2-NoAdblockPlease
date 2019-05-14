import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertsix',
  templateUrl: './advertsix.component.html',
  styleUrls: ['./advertsix.component.css']
})
export class AdvertsixComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {
  }

}
