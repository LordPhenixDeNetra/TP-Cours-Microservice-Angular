import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../../models/restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private url = 'http://localhost:9001/api/restaurants'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url+ "/all");
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.url}/${id}`);
  }
}
