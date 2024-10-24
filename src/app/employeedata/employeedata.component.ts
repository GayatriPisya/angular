import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  employees: any[] = [];  // Storing employees
  newEmployee = {         // Storing form input data
    empId: 0,
    empName: '',
    empEmail: ''
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Fetch all employees from backend
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  // Add new employee
  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.getEmployees(); // Refresh the employee list after adding
      this.newEmployee = { empId: 0, empName: '', empEmail: '' };  // Reset form
    });
  }
}
