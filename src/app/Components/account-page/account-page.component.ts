import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  constructor(private router: Router, public user: UserService) { }

  ngOnInit(): void {
    if(!this.user.getUser())
      this.router.navigate(['/login']).then();
  }

}
