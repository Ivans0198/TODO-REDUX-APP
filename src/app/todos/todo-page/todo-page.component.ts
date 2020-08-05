import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { completarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  completado = false;

  ngOnInit(): void {}

  completarTodos() {
    this.completado = !this.completado;
    this.store.dispatch(
      actions.completarTodos({ completado: this.completado })
    );
  }
}
