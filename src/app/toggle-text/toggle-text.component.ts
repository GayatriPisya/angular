import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-text',
  templateUrl: './toggle-text.component.html',
  styleUrls: ['./toggle-text.component.css']
})
export class ToggleTextComponent {
  isVisible: boolean = true; 
  toggleText() {
    this.isVisible = !this.isVisible; 
  }
}
