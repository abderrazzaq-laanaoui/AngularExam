import { Injectable } from '@angular/core';
import {Joke} from '../models/Joke';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _Jokes: Array<Joke>;
  private url = "https://institutjamai.com/exam/allJokes";
  private randUrl = "https://api.chucknorris.io/jokes/random";



  get Jokes(): Array<Joke> {
    return this._Jokes;
  }

  constructor(private httpC:HttpClient,private router: Router) {
    this._Jokes=new Array<Joke>();

    this.httpC.get<Array<Joke>>(this.url).subscribe(
      (res)=>{ this.Jokes.push(...res) },
      (err)=>{
        console.log(err);
        alert("ERROR!")}
    )
  }

  public addJoke(Joke:Joke){

    this.httpC.post<Joke>(this.url,Joke).subscribe(
      (res)=> { this.Jokes.push(res)
        this.router.navigateByUrl('/list');
      },
      ()=> {
        alert("ERROR!");
      }
    )
  }
  public addRandJoke(){
    this.httpC.get<{value:string}>(this.randUrl).subscribe(
      (res)=>{
        let message = res.value;
        console.log(message);
      },
      (err)=>{
        alert("ERROR!")}
    )

}
}
