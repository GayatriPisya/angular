import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  parentMessage: string = 'Parent COmponent';
  messageFromChild: string = '';

  receiveMessage(event: string) {
    this.messageFromChild = event;
  }
}
