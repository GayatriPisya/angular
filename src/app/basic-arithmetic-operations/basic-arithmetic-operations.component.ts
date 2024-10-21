import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-arithmetic-operations',
  templateUrl: './basic-arithmetic-operations.component.html',
  styleUrl: './basic-arithmetic-operations.component.css'
})
export class BasicArithmeticOperationsComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  onNumber1Change(event: Event) {
    const inputElement = event.target as HTMLInputElement;  
    this.number1 = parseFloat(inputElement.value) || 0;
  }

  onNumber2Change(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.number2 = parseFloat(inputElement.value) || 0;
  }

  calculate(operation: string) {
    switch (operation) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'sub':
        this.result = this.number1 - this.number2;
        break;
      case 'mul':
        this.result = this.number1 * this.number2;
        break;
      case 'div':
        if (this.number2 !== 0) {
          this.result = this.number1 / this.number2;
        } else {
          alert("Division by zero is not allowed");
          this.result = NaN;
        }
        break;
      default:
        this.result = 0;
    }
  }
}
