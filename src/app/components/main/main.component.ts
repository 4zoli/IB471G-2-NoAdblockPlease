import {Component, OnInit, NgZone, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
