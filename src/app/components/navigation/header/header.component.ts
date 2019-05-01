import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(
    public authService: AuthService
  ) { }


  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
