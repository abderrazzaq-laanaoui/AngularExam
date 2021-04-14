import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Joke} from '../../models/Joke';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form=new FormGroup({
      author:new FormControl('',[Validators.required,Validators.minLength(3)]),
      text:new  FormControl('',[Validators.required,Validators.minLength(3)])
    })

  }
  validateData() {
    let author = this.form.getRawValue().author;
    let fname = this.form.getRawValue().fname;
    let lname = this.form.getRawValue().lname;
    this.service.addJoke(new Joke(fname,lname,cne));
    this.form.reset();

  }

}
