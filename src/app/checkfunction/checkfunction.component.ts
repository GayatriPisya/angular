import { Component } from '@angular/core';

@Component({
  selector: 'app-checkfunction',
  templateUrl: './checkfunction.component.html',
  styleUrls: ['./checkfunction.component.css'], 
})
export class CheckfunctionComponent {
  role: number = 1; 

  getColor(): string {
    switch (this.role) {
      case 1:
        return 'green'; 
        case 2:
        return 'blue'; 
      case 3:
        return 'orange';
      case 4:
        return 'purple'; 
      default:
        return 'red'; 
    }
  }
}
