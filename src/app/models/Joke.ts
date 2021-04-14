export class Joke {
  id:number;
  author:string;
  text:string;


  constructor(author: string, text: string) {
    this.author = author;
    this.text = text;
  }
}
