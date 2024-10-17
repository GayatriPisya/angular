import { Component } from '@angular/core';

// Define the Customer interface outside the component class
interface Customer {
  id?: number;  // Optional id for new customers
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  // Define the type for the customers array
  customers: Customer[] = [];  // Empty array of type Customer[]

  // Define the selectedCustomer using the Customer type
  selectedCustomer: Customer = { id: undefined, name: '', address: '', city: '', state: '', country: '' };

  // Method to handle the edit action
  onEdit(customer: Customer) {
    this.selectedCustomer = { ...customer };  // Make a copy of the selected customer
  }

  // Method to handle adding a new customer or updating an existing one
  onUpdate(updatedCustomer: Customer) {
    if (updatedCustomer.id) {
      // Update existing customer
      const index = this.customers.findIndex(c => c.id === updatedCustomer.id);
      if (index !== -1) {
        this.customers[index] = updatedCustomer;
        alert(`Customer updated: ${JSON.stringify(updatedCustomer)}`);
      }
    } else {
      // Add new customer
      updatedCustomer.id = this.customers.length + 1;  // Assign a new ID
      this.customers.unshift(updatedCustomer);  // Add new customer at the top
      alert(`Customer added: ${JSON.stringify(updatedCustomer)}`);
    }
    this.resetForm();
  }

  // Reset the form to allow for new entries
  resetForm() {
    this.selectedCustomer = { id: undefined, name: '', address: '', city: '', state: '', country: '' };
  }
}
