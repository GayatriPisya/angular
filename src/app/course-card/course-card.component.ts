import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  courseName: string = 'Angular Basics';  // Initial course name

  changeCourse(): void {
    this.courseName = 'Advanced Angular';  // Change the course name on button click
  }
}
