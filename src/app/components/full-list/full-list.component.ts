import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../mock-todo';
import { TODO } from '../../mock-todoentity';
@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.css']
})
export class FullListComponent implements OnInit {
  todos:TODO[] = TODOS;
  displayedColumns: any[] = ['id', 'username', 'title', 'completed', 'targetDate', 'complete'];
  constructor() { }

  deleteTodo(id: number ){
    this.todos = this.todos.filter(i => i.id != id);
  }

  ngOnInit() {
  }

}
