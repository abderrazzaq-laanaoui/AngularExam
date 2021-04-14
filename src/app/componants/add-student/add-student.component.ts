import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public form:FormGroup;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      cne:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      fname:new  FormControl('',[Validators.required,Validators.minLength(3)]),
      lname:new  FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }

  validateData() {
    let cne = this.form.getRawValue().cne;
    let fname = this.form.getRawValue().fname;
    let lname = this.form.getRawValue().lname;
    this.service.addStudent(new Student(fname,lname,cne));
    this.form.reset();

  }
}
