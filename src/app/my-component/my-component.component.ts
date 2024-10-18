import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponent {
  userName: string = ''; 
  isCardVisible: boolean = false; 
  cardTitle: string = 'Welcome Card'; 
  cardImage: string = '/image.png';
  
  toggleCardVisibility(): void {
    this.isCardVisible = !this.isCardVisible;
  }
  updateCard(): void {
    this.cardTitle = this.userName ? `${this.userName}'s Personalized Card` : 'Welcome Card';
  }
}