import { Component, OnInit } from '@angular/core';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertone',
  templateUrl: './advertone.component.html',
  styleUrls: ['./advertone.component.css']
})
export class AdvertoneComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) {

  }

  ngOnInit() {

  }


}
