import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  quizlist = [
    {id: 1, title: 'Quiz 1'},
    {id: 2, title: 'Quiz 2'},
    {id: 3, title: 'Quiz 3'},
    {id: 4, title: 'Quiz 4'},
  ];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => console.log(params));
  }

}
