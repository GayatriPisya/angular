import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  @Input() customer: any;
  @Output() updateCustomer = new EventEmitter<any>();

  onUpdate() {
    this.updateCustomer.emit(this.customer);  
  }
}
