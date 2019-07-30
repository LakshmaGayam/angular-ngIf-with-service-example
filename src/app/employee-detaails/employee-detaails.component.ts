import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-detaails',
  templateUrl: './employee-detaails.component.html',
  styleUrls: ['./employee-detaails.component.css']
})
export class EmployeeDetaailsComponent implements OnInit {
public employee=[];
  constructor(private details:EmployeeService) { }

  ngOnInit() {
  this.employee=this.details.getEmployee()
  }

}