import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../models/customer";
import {Order} from "../../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:9001/api/commandes";

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url+"/all");
  }
}
