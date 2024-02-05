import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Restaurant} from "../../models/restaurant";
import {RestaurantsService} from "../../services/restaurants/restaurants.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'address', 'phoneNumber', 'commandNumber','actions'];
  dataSource: MatTableDataSource<Restaurant>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private restaurantService: RestaurantsService, private router : Router) {
    this.dataSource = new MatTableDataSource<Restaurant>();
  }

  ngOnInit() {
    this.getAllRestaurants();
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  getAllRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (response: any) => {
        console.log('Réponse de l\'API : ', response);
        if (response.success && response.data && Array.isArray(response.data)) {
          console.log('Données des restaurants : ', response.data);
          this.dataSource.data = response.data;
        } else {
          console.error('Les données reçues ne sont pas valides : ', response);
        }
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des restaurants : ', error);
      }
    );
  }

  handleEdit(id : number) {

  }

  handleAddRestaurant() {
    this.router.navigate(["new-restaurant"]);
  }
}
