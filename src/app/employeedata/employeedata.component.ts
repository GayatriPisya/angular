import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  employees: any[] = [];  
  newEmployee = {    
    empId: 0,
    empName: '',
    empEmail: ''
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.getEmployees(); 
      this.newEmployee = { empId: 0, empName: '', empEmail: '' };  
    });
  }
}
