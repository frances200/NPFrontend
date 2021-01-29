import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accountName: string = "Sign in";

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.user.subscribe(updatedUser => {
      if(!updatedUser){
        this.accountName = "Sign in";
        return;
      }
      this.accountName = "Hi, " + updatedUser.firstname;
    });
  }
}
