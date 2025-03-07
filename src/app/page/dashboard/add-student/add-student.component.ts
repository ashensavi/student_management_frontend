import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  public student :any={
    name: "null",
    address: "null",
    gpa: "null"
  }

  constructor(private http: HttpClient){
      
  }

  addStudent(){
    this.http.get("http://localhost:8080/student/add-student", this.student).subscribe(data=>{
      console.log(data)

    })
  }


  public username : string="saman";

  public students = [
    {
      name : "Senuka",
      address : "Bokolagama",
      salary : 34000.00
    },
    {
      name : "nisadu",
      address : "Piliyandala",
      salary : 34000.00
    },
    {
      name : "deshika",
      address : "Thumpane",
      salary : 35.00
    },
    {
      name : "methni",
      address : "Aluthgama",
      salary : 34000.00
    }
  ]

}
