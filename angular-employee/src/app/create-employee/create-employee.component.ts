import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  employee: Employee = new Employee();

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.gotoEmployeeList();
    },
    error => console.log(error));
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee()
  }
}
