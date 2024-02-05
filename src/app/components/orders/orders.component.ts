import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Customer} from "../../models/customer";
import {CustomersService} from "../../services/customers/customers.service";
import {Order} from "../../models/order";
import {OrdersService} from "../../services/orders/orders.service";
// import {
//   MatDialog,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogRef,
//   MatDialogTitle
// } from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  displayedColumns: string[] = ['id', 'idRestaurant', 'idMenu', 'idClient', 'etat', 'price'];
  dataSource: MatTableDataSource<Order>;
  // customers : Array<Customer> = []

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private ordersService : OrdersService, private router : Router) {
    this.dataSource = new MatTableDataSource<Order>();
  }

  ngOnInit() {

    this.getAllOrders();

    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  getAllOrders(): void {
    this.ordersService.getAllOrders().subscribe(
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

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogAnimationsExampleDialog, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
  handleAddOrder() {
    this.router.navigate(["new-order"]);

  }
}

/*
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  standalone: true,
  // standalone: true,
  // imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}

 */

