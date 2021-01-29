import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {ShoppingCartService} from '../../Services/shopping-cart.service';
import {OrderService} from '../../Services/order.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private cart: ShoppingCartService, private orderService: OrderService) { }

  ngOnInit(): void {
    if(!this.userService.getUser())
      this.router.navigate(["/login"]).then();
  }

  checkout(){
    this.orderService.createOrder(this.userService.getUser().id, "completed", this.cart.getProducts()).then(result => {
      if(!result){
        window.alert('Oops something went wrong!');
      }else{
        this.router.navigate(['/order/completed']).then();
      }
    });
  }
}
