import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../models/Student';

@Component({
  selector: '[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent implements OnInit {
  @Input() student:Student;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {

  }
}
