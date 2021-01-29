import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(email: string, password: string): void {
    this.userService.loginUser(email, password).then(result => {
      if(!result)
        return;

      const route: string = this.userService.getUser().role !== 'customer' ? '/portal' : '/store';
      this.router.navigate([route]).then();
    });
  }
}
