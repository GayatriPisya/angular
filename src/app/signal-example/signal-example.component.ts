import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-signal-example',
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css'
})
export class SignalExampleComponent {
  // Create a signal for userName
  userName = signal('');

  // Method to update the userName signal
  updateUserName(event: Event) {
    const target = event.target as HTMLInputElement; // Type assertion
    this.userName.set(target.value); // Use the input value
  }
}
