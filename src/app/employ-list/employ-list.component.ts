import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {
  employList: any[] = [];

  constructor(private employService: EmployService) { }

  ngOnInit(): void {
    this.employList = this.employService.getEmployList();
  }
}
