import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Joke} from '../../models/Joke';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {

  public form : FormGroup;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      author :new FormControl('',[Validators.required,Validators.minLength(3)]),
      value   :new  FormControl('',[Validators.required,Validators.minLength(3)])
    });
  }

  validateData() {
    let author = this.form.getRawValue().author;
    let text = this.form.getRawValue().text;
    this.service.addJoke(new Joke(author,text));
    this.form.reset();
  }

}
