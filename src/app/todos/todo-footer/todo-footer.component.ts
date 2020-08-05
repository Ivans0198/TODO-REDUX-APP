import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actionsFiltro from '../filtro/filtro.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actionsFiltro.Filtro = 'Todos';
  filtros: actionsFiltro.Filtro[] = ['Todos', 'Completados', 'Pendientes'];

  pendientes = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actionsFiltro.Filtro) {
    this.store.dispatch(actionsFiltro.filtrar({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(actionsTodo.borrarCompletados());
  }
}
