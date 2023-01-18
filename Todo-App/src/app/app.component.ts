import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import { TodoService } from './todo.service';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //todos?: Todo[];

  constructor(public dialog: MatDialog, protected todoService: TodoService) { }

  /*
  ngOnInit(): void {
    this.getTodos();
  }
  */

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { id: this.todoService.getId(), done: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.createTodo(result);
      }
    });
  }

  /*
  getTodos(): void {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos);
  }
  */

  /*
  getTodos(): void {
    this.todos = this.todoService.getAll();
  }
  */

  createTodo(todo: Todo): void {
    this.todoService.add(todo);
  }

}
