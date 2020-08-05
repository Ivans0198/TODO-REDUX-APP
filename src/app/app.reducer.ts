import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducers';
import { Filtro } from './todos/filtro/filtro.actions';
import { filtroReducer } from './todos/filtro/filtro.reducers';

export interface AppState {
  todos: Todo[];
  filtro: Filtro;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
