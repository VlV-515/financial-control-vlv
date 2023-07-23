import { Component, OnInit } from '@angular/core';
import { AuthLocalService } from '../../services/auth-local.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  user$!: Observable<any>;
  constructor(public authLocalSvc: AuthLocalService) {
    this.user$ = this.authLocalSvc.getUser$();
  }

  ngOnInit(): void {}
}
