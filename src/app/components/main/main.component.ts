import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from '../../shared/routing/app-routing.module';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  @ViewChild('firstpage') firstpage;
  @ViewChild('secondpage') secondpage;
  public randomSlowRightNumber: number;
  public randomSlowLeftNumber: number;
  public randomFastLeftNumber: number;
  public randomFastRightNumber: number;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.generateRandomNumberSlow();
    this.generateRandomNumberFast();
  }

  ngOnInit() {
  }
  generateRandomNumberSlow()  {
    setTimeout(() => {
      // console.log('SlowLeftNumber' , this.randomSlowLeftNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      // console.log('SlowRightNumber' , this.randomSlowRightNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomSlowLeftNumber = Math.ceil(this.randomSlowLeftNumber = (Math.random() * (5 - 1) + 1));
      this.randomSlowRightNumber = Math.ceil(this.randomSlowRightNumber = (Math.random() * (5 - 1) + 1));
      this.generateRandomNumberSlow();
    }, 1700);
  }

  generateRandomNumberFast()  {
    setTimeout(() => {
      // console.log('FastLeftNumber', this.randomFastLeftNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      // console.log('FastLeftNumber', this.randomFastRightNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomFastLeftNumber = Math.ceil(this.randomFastLeftNumber = (Math.random() * (5 - 1) + 1));
      this.randomFastRightNumber = Math.ceil(this.randomFastRightNumber = (Math.random() * (5 - 1) + 1));
    }, 900);
  }



}


