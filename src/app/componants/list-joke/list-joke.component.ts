import { Component, OnInit } from '@angular/core';
import {Joke} from '../../models/Joke';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-list-joke',
  templateUrl: './list-joke.component.html',
  styleUrls: ['./list-joke.component.css']
})
export class ListJokeComponent implements OnInit {

  jokes: Array<Joke>;

  constructor(private service:AppService) {
  }

  ngOnInit(): void {
    this.jokes = this.service.Jokes;

  }

}
