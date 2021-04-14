import {Component, Input, OnInit} from '@angular/core';
import {Joke} from '../../../models/Joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke:Joke;

  constructor() { }

  ngOnInit(): void {
  }

}
