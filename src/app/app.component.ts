import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { AddStudentComponent } from "./page/dashboard/add-student/add-student.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }
  title = 'student_management_frontend';

}
