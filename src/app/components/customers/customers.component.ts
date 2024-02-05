import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {CustomersService} from "../../services/customers/customers.service";
import {Customer} from "../../models/customer";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber', 'address', 'commandCount','actions'];
  dataSource: MatTableDataSource<Customer>;
  // customers : Array<Customer> = []

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private customersService : CustomersService, private router : Router) {
    this.dataSource = new MatTableDataSource<Customer>();
  }

  ngOnInit() {

    this.getAllCustomers();

    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }


  getAllCustomers(): void {
    this.customersService.getAllCustomers().subscribe(
      (response: any) => {
        console.log('Réponse de l\'API : ', response); // Vérifiez la structure de la réponse
        if (response.success && response.data && Array.isArray(response.data)) {
          console.log('Données des clients : ', response.data); // Vérifiez le tableau des clients
          // Attribution directe au dataSource
          this.dataSource.data = response.data;
        } else {
          console.error('Les données reçues ne sont pas valides : ', response);
        }
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des clients : ', error);
      }
    );
  }


  handleEdit(id : number) {
    console.log(id);
  }

  handleAddUser() {
    this.router.navigate(["new-customer"]);
  }
}
