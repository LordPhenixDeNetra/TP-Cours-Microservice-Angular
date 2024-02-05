import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Customer, CustomerData} from "../../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http : HttpClient) { }

  url : string = "http://127.0.0.1:9001/api/restaurant-client";

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url+"/all");
  }

  addCustomer(data: any):Observable<Customer>{
    return this.http.post<Customer>(this.url, data);
  }

  // addCustomer(customer: Customer):Observable<Customer>{
  //   return this.http.post<Customer>(this.url, customer);
  // }


}
