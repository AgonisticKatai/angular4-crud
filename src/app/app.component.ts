import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';
  employees = [
    { 'name': 'Nacho', position: 'manager'},
    { 'name': 'Rauqel', position: 'CTO'},
    { 'name': 'Alex', position: 'designer'},
    { 'name': 'Nacho', position: 'programmer'}
  ];

  model: any = {};


  addEmployee():void {

  }

  deleteEmployee():void {

  }

  editEmployee():void {

  }

  updateEmployee():void {

  }
}
