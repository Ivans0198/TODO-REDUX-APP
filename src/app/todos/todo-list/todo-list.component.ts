import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Filtro } from '../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: Filtro;

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    // Cuando solo había un reducer
    // this.store.select('todos').subscribe((todos) => (this.todos = todos));

    // Totalmente válido pero más abajo hacemos lo mismo con la desestructuración del objeto para
    // no tener que hacer state.todos y state.filtro
    // this.store.subscribe((state) => {
    //   this.todos = state.todos;
    //   this.filtroActual = state.filtro;
    // });


    // Desestructuación del objeto
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
