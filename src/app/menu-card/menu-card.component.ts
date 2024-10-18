import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  codingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'];
  selectedLanguage: string = '';
  
  languageDetails: { [key: string]: string } = {
    'JavaScript': 'JavaScript is a versatile language for web development.',
    'Python': 'Python is great for data science and general programming.',
    'Java': 'Java is widely used for enterprise applications.',
    'C++': 'C++ is a powerful language for system programming.',
    'TypeScript': 'TypeScript is a typed superset of JavaScript.'
  };

  onLanguageChange(event: any) {
    this.selectedLanguage = event.target.value;
  }
}
