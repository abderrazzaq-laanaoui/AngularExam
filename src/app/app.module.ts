import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { AddStudentComponent } from './componants/add-student/add-student.component';
import { ListStudentComponent } from './componants/list-student/list-student.component';
import { StudentRowComponent } from './componants/list-student/student-row/student-row.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentComponent,
    ListStudentComponent,
    StudentRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
