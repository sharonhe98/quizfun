import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes: Routes = [
  {path: 'quizzes', component: QuizzesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
