import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentComponent} from './componants/list-student/list-student.component';
import {AddStudentComponent} from './componants/add-student/add-student.component';

const routes: Routes = [
  {
    path:"",component:ListStudentComponent
  },
  {
    path:"list",component:ListStudentComponent
  },
  {
    path:"add",component:AddStudentComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
