import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPageComponent} from './Components/about-page/about-page.component';
import {ContactPageComponent} from './Components/contact-page/contact-page.component';
import {FaqPageComponent} from './Components/faq-page/faq-page.component';
import {StorePageComponent} from './Components/store-page/store-page.component';
import {ShoppingCartPageComponent} from './Components/shopping-cart-page/shopping-cart-page.component';
import {CheckoutPageComponent} from './Components/checkout-page/checkout-page.component';
import {ProductPageComponent} from './Components/product-page/product-page.component';
import {LoginPageComponent} from './Components/login-page/login-page.component';
import {RegisterPageComponent} from './Components/register-page/register-page.component';
import {AccountPageComponent} from './Components/account-page/account-page.component';
import {OrderPageComponent} from './Components/order-page/order-page.component';
import {PortalPageComponent} from './Components/portal-page/portal-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full'},
  { path: 'store', component: StorePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'cart', component: ShoppingCartPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'order/completed', component: OrderPageComponent },
  { path: 'portal', component: PortalPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
