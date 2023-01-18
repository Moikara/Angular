import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { TodoService } from '../todo.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{
  paramsSub: any;
  todo?: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe(val => {
      this.getTodo(Number(val['id']));
  });
  }

  getTodo(id: number): void {
    this.todo = this.todoService.get(id);
  }

  save(): void {
    if (this.todo) {
      this.todoService.replace(this.todo);
    }
  }

  delete(): void {
    if (this.todo) {
      this.todoService.delete(this.todo.id);
      this.router.navigate(['']);
    }
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
}
}
