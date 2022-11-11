import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit {
  constructor(public appService: AppServiceService) {}

  ngOnInit(): void {}

  addTodo(val: string) {
    this.appService.todos.push(val);
  }

  removeTodos(i: number) {
    console.log(i);
  }
}
