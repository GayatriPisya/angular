import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  rollNumber: number;
  name: string;
  age: number;
  course: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
    { rollNumber: 146, name: 'Sireesha', age: 20, course: 'ST' },
    { rollNumber: 149, name: 'Gayatri', age: 20, course: 'ST' },
    { rollNumber: 155, name: 'Kishore', age: 20, course: 'ST' }
  ];
}
