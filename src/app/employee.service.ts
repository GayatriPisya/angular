import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, employee);
  }
}
