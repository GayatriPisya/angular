import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  rollNumber: number;
  name: string;
  age: number;
  course: string;
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  

  students: Student[] = [
    { rollNumber: 146, name: 'Sireesha', age: 20, course: 'ST' },
    { rollNumber: 149, name: 'Gayatri', age: 20, course: 'ST' },
    { rollNumber: 155, name: 'kishore', age: 20, course: 'ST' }
  ];

  selectedStudent: Student | null = null; 

  selectStudent(event: Event) {
    const selectElement = event.target as HTMLSelectElement; 
    const rollNumber = selectElement.value; 
    this.selectedStudent = this.students.find(student => student.rollNumber === +rollNumber) || null;
  }
 
   
  
}
