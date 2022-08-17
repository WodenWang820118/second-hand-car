import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  // TODO: in production, inject AuthService
  constructor(router: Router) {
    // if (this.auth.getUser() === null || this.auth.getUser() === undefined) {
    //   router.navigate(['/auth']);
    // }
  }

  ngOnInit(): void {
  }

}
