import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/Student';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Array<Student>;

  constructor(private service:AppService) {
  }

  ngOnInit(): void {
    this.students = this.service.students;

  }

}
