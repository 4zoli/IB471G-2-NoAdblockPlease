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
  randomNumberMain: number;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.generateRandomNumber();
  }

  ngOnInit() {
  }

  generateRandomNumber()  {
    setTimeout(() => {
      console.log('Random szám generálva' + this.randomNumberMain);
      console.log(this.randomNumberMain = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomNumberMain = Math.ceil(this.randomNumberMain = (Math.random() * (5 - 1) + 1));
      this.generateRandomNumber();
    }, 2000);

  }


}


