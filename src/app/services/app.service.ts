import { Injectable } from '@angular/core';
import {Student} from '../models/Student';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _students: Array<Student>;
  private url = "http://localhost:3000/students";


  get students(): Array<Student> {
    return this._students;
  }

  constructor(private httpC:HttpClient,private router: Router) {
    this._students=new Array<Student>();

    this.httpC.get<Array<Student>>(this.url).subscribe(
      (res)=>{ this.students.push(...res) },
      (err)=>{
        console.log(err);
        alert("ERROR!")}
    )
  }
  public addStudent(student:Student){

    this.httpC.post<Student>(this.url,student).subscribe(
      (res)=> { this.students.push(res)
        this.router.navigateByUrl('/list');
      },
      ()=> {
        alert("ERROR!");
      }
    )
  }
}
