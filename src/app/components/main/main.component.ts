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
  public randomNumberRight: number;
  public randomNumberLeft: number;

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
      console.log('Bal' , this.randomNumberLeft = Math.ceil(Math.random() * (5 - 1) + 1));
      console.log('Jobb' , this.randomNumberRight = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomNumberLeft = Math.ceil(this.randomNumberLeft = (Math.random() * (5 - 1) + 1));
      this.randomNumberRight = Math.ceil(this.randomNumberRight = (Math.random() * (5 - 1) + 1));
      this.generateRandomNumber();
    }, 2000);

  }


}


