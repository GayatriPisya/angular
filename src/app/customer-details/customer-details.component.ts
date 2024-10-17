import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  @Input() customer: any;  // Receive the customer from the parent using @Input
  @Output() updateCustomer = new EventEmitter<any>();  // Emit the update event to the parent using @Output

  onUpdate() {
    if (this.customer.name && this.customer.city && this.customer.state && this.customer.country) {
      this.updateCustomer.emit(this.customer);  // Emit the updated customer back to the parent
    } else {
      alert('Please fill all fields');
    }
  }
}
