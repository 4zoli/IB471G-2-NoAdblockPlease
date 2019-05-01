import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav;


  constructor(
    public authService: AuthService,
  ) {}

  ngOnInit() { }


}
