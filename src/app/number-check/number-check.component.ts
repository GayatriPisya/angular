import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-check',
  templateUrl: './number-check.component.html',
  styleUrls: ['./number-check.component.css']
})
export class NumberCheckComponent {
  number1: number | null = null;
  number2: number | null = null;
  showEvenButton: boolean = false; 
  message: string = '';

  checkEvenNumbers() {
    if (this.number1 !== null && this.number2 !== null) {
      if (this.number1 % 2 === 0 && this.number2 % 2 === 0) {
        this.showEvenButton = true;
        this.message = ''; 
      } else {
        this.showEvenButton = false;
        this.message = 'Try again';
      }
    } else {
      this.showEvenButton = false; 
      this.message = 'Please enter both numbers.'; 
    }
  }
}
