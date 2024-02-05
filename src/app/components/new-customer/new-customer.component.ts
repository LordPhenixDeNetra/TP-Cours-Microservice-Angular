import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Customer} from "../../models/customer";
import {CustomersService} from "../../services/customers/customers.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private customerService : CustomersService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  /*
  onSubmit() {
    if (this.myForm.valid) {
      // Soumettre le formulaire
      // console.log(this.myForm.value);

      // let costumer : Customer = this.myForm.value;

      this.customerService.addCustomer(this.myForm.value).subscribe({
        next: data=>{
          alert("Customer has been saved successfully");
          this.myForm.reset();
          this.router.navigateByUrl("/customers");
        },
        error : err => {
          console.log(err);
        }
      })
    }
  }
  */

  handleCancel() {

  }

  handleAddCustomer() {
    if (this.myForm.valid) {
      // Soumettre le formulaire
      // console.log(this.myForm.value);

      // let costumer : Customer = this.myForm.value;

      this.customerService.addCustomer(this.myForm.value).subscribe({
        next: data=>{
          alert("Customer has been saved successfully");
          this.myForm.reset();
          this.router.navigateByUrl("/customers");
        },
        error : err => {
          console.log(err);
        }
      })
    }
  }
}
