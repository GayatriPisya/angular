import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers = [
    { id: 1, name: 'Rahul Dravid', address: '', city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { id: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { id: 3, name: 'Saurav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { id: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { id: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' }
  ];

  selectedCustomer: any = null;

  onEdit(customer: any) {
    this.selectedCustomer = { ...customer };  // Create a copy to avoid direct mutation
  }

  onUpdate(updatedCustomer: any) {
    const index = this.customers.findIndex(c => c.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer };  
      alert(`Customer updated: ${JSON.stringify(updatedCustomer)}`);
    }
  }

  onDelete(customerId: number) {
    this.customers = this.customers.filter(c => c.id !== customerId);
    alert(`Customer with ID ${customerId} has been deleted`);
  }
}
