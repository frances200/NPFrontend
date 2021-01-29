import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { FaqPageComponent } from './Components/faq-page/faq-page.component';
import { StorePageComponent } from './Components/store-page/store-page.component';
import { ItemListComponent } from './Components/store-page/item-list/item-list.component';
import { ItemComponent } from './Components/store-page/item-list/item/item.component';
import { ShoppingCartPageComponent } from './Components/shopping-cart-page/shopping-cart-page.component';
import { CartListComponent } from './Components/shopping-cart-page/cart-list/cart-list.component';
import { CartItemComponent } from './Components/shopping-cart-page/cart-list/cart-item/cart-item.component';
import { CheckoutPageComponent } from './Components/checkout-page/checkout-page.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { AccountPageComponent } from './Components/account-page/account-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { OrderPageComponent } from './Components/order-page/order-page.component';
import { OrdersListComponent } from './Components/account-page/orders-list/orders-list.component';
import { OrderItemComponent } from './Components/account-page/orders-list/order-item/order-item.component';
import { PortalPageComponent } from './Components/portal-page/portal-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    StorePageComponent,
    ItemListComponent,
    ItemComponent,
    ShoppingCartPageComponent,
    CartListComponent,
    CartItemComponent,
    CheckoutPageComponent,
    ProductPageComponent,
    AccountPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    OrderPageComponent,
    OrdersListComponent,
    OrderItemComponent,
    PortalPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
