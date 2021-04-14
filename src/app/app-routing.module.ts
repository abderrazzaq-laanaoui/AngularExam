import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListJokeComponent} from './componants/list-joke/list-joke.component';
import {AddJokeComponent} from './componants/add-Joke/add-Joke.component';

const routes: Routes = [
  {
    path:"",component:ListJokeComponent
  },
  {
    path:"list",component:ListJokeComponent
  },
  {
    path:"add",component:AddJokeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
