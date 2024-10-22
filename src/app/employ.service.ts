import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployService {
  constructor() { }
  getEmployList() {
    return [
      { id: 1, firstname: 'Tulugu', lastname: 'Babu', email: 'tulugukishorebabu@gmail.com' },
      { id: 2, firstname: 'Modi', lastname: 'Sireesha', email: 'modisireesha09@gmail.com' },
      { id :3, firstname: 'Pisya',lastname: 'Gayatri', email: 'gayatripisya@gmail.com'}
    ];
  }
}
