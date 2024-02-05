import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {RestaurantsComponent} from "./components/restaurants/restaurants.component";
import {NewCustomerComponent} from "./components/new-customer/new-customer.component";
import {NewRestaurantComponent} from "./components/new-restaurant/new-restaurant.component";
import {NewOrderComponent} from "./components/new-order/new-order.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path : "", component : HomeComponent},
  {
    path : "customers", component : CustomersComponent,
    children : [

      {path: "edit-customer/:id", component: NewCustomerComponent}
    ]
  },

  {path : "new-customer", component:NewCustomerComponent},
  {path : "new-restaurant", component:NewRestaurantComponent},
  {path : "new-order", component:NewOrderComponent},

  {path : "restaurants", component : RestaurantsComponent,
    children : [
      {path : "new-restaurant", component:NewRestaurantComponent},
      {path: "edit-restaurant/:id", component: NewRestaurantComponent}
    ]
  },
  {
    path : "orders", component : OrdersComponent,
    children : [
      {path : "new-order", component:NewOrderComponent},
      {path : "new-order/:id", component:NewOrderComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
