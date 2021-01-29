import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit(): void {
  }

  registerUser(email: string, password: string, fname: string, lname: string, phone: string): void {
    if(fname.length < 2 || lname.length < 2){
      return;
    }
    this.user.registerUser(email, password, fname, lname, phone).then(result => {
      if(!result)
        return;

      this.router.navigate(['/login']).then();
    });
  }
}
