import { Component } from '@angular/core';
import { Customer } from './customer';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'Mark Vought', address: '', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA'},
    {customerNo: 3, name: 'Merry Ann', address: '', city: 'Berlin', country: 'Germany'},
    {customerNo: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: 'India'},
    {customerNo: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'Pakistan'}
  ]
  

}
