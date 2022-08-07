import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(public auth: AuthService, router: Router) {
    if (this.auth.getUser() === null || this.auth.getUser() === undefined) {
      router.navigate(['/auth']);
    }
  }

  ngOnInit(): void {
  }

}
