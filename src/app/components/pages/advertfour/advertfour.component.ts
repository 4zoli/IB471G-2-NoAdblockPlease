import { Component, OnInit } from '@angular/core';
import { LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-advertfour',
  templateUrl: './advertfour.component.html',
  styleUrls: ['./advertfour.component.css']
})
export class AdvertfourComponent implements OnInit {

  constructor(
    public linkOpener: LinkopenerService
  ) { }

  ngOnInit() {

  }

}
