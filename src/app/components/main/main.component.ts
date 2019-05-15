import {Component, ViewChild} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('sidenav') sidenav;
  @ViewChild('firstpage') firstpage;
  @ViewChild('secondpage') secondpage;
  public randomSlowRightNumber: number;
  public randomSlowLeftNumber: number;
  public randomFastLeftNumber: number;
  public randomFastRightNumber: number;
  public SecCounter = 0;

  constructor(
    public authService: AuthService
  ) {
    this.generateRandomNumberSlow();
    this.generateRandomNumberFast();
    this.helpButtonRevealTimer();
    this.helpButtonHideTimer();
  }
  generateRandomNumberSlow()  {
    setTimeout(() => {
      // console.log('SlowLeftNumber' , this.randomSlowLeftNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      // console.log('SlowRightNumber' , this.randomSlowRightNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomSlowLeftNumber = Math.ceil(this.randomSlowLeftNumber = (Math.random() * (5 - 1) + 1));
      this.randomSlowRightNumber = Math.ceil(this.randomSlowRightNumber = (Math.random() * (5 - 1) + 1));
      this.generateRandomNumberSlow();
    }, 1300);
  }

  generateRandomNumberFast()  {
    setTimeout(() => {
      // console.log('FastLeftNumber', this.randomFastLeftNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      // console.log('FastLeftNumber', this.randomFastRightNumber = Math.ceil(Math.random() * (5 - 1) + 1));
      this.randomFastLeftNumber = Math.ceil(this.randomFastLeftNumber = (Math.random() * (5 - 1) + 1));
      this.randomFastRightNumber = Math.ceil(this.randomFastRightNumber = (Math.random() * (5 - 1) + 1));
    }, 500);
  }


  private helpButtonRevealTimer() {
    setTimeout(() => {
      this.SecCounter = 1;
    }, 20000);
  }

  private helpButtonHideTimer() {
    setTimeout(() => {
      this.SecCounter = 0;
    }, 25000);
  }
}


