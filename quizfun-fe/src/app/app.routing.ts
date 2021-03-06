import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

const routes: Routes = [
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'create-quiz', component: CreateQuizComponent}
];

export const router = RouterModule.forRoot(routes);
