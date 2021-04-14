import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Joke} from '../../models/Joke';

@Component({
  selector: 'app-add-Joke',
  templateUrl: './add-Joke.component.html',
  styleUrls: ['./add-Joke.component.css']
})
export class AddJokeComponent implements OnInit {
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
    this.service.addJoke(new Joke(fname,lname,cne));
    this.form.reset();

  }
}
