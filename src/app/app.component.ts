import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';
  employees = [
    { name: 'Nacho', position: 'manager', email: 'nacho@gmail.com'},
    { name: 'Raquel', position: 'CTO', email: 'raquel@gmail.com'},
    { name: 'Alex', position: 'designer', email: 'alex@gmail.com'},
    { name: 'Irene', position: 'programmer', email: 'irene@gmail.com'}
  ];

  model: any = {};
  updateModel: any = {};
  index: number = 0;
  msg: string = '';
  hideUpdateForm: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Employee added properly'
  }

  deleteEmployee(i): void {
    this.employees.splice(i, 1);
    this.msg = 'Employee removed properly';
  }

  editEmployee(i) {
    this.updateModel.name = this.employees[i].name;
    this.updateModel.position = this.employees[i].position;
    this.updateModel.email = this.employees[i].email;
    this.index = i;
    this.hideUpdateForm = false;
  }

  updateEmployee() {
    const i = this.index;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.updateModel;
        this.updateEmployee = {};
      }
    }
    this.msg = 'Employee edited properly';
    this.hideUpdateForm = true;
  }

  closeAlert(): void {
    this.msg = '';
  }
}
