import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import {ReactiveFormsModule} from '@angular/forms';
import { AddJokeComponent } from './componants/add-joke/add-joke.component';
import { ListJokeComponent } from './componants/list-joke/list-joke.component';
import { JokeComponent } from './componants/list-joke/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddJokeComponent,
    ListJokeComponent,
    JokeComponent
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
