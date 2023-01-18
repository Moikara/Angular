import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  //id: number = 1;

  getId(): number {
    if (this.todos.length === 0) {
      return 1;
    }

    const max: number = Math.max(...this.todos.map(todo => todo.id));
    const id: number = max + 1;

    return id;
  }

  /*
  getAll(): Todo[] {
    return this.todos;
  }
  */

  /*
  getAll(): Observable<Todo[]> {
    const todos = of(this.todos);
    return todos;
  }
  */

  get(id: number): Todo {
    const todo: Todo = this.todos.find(todo => todo.id === id) || { id: 0, title: "", text: "", done: false };
    const copy: Todo = { ...todo };

    return copy;
  }

  add(todo: Todo): void {
    this.todos.push(todo);
  }

  replace(newTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === newTodo.id);
    this.todos[index] = { ...newTodo };
  }

  delete(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
