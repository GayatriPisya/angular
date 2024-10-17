import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() childMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit('Message from Child');
  }
}
