import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employee=[];
  constructor(private employeelist:EmployeeService) { }

  ngOnInit() {
this.employee=this.employeelist.getEmployee();
  }

}