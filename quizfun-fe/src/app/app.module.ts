import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import {router} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuizzesComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
