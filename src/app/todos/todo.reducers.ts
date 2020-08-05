import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Estimar las tareas'),
  new Todo('Leer un libro'),
  new Todo('Ir a comprar la bareta'),
  new Todo('Ir a tirar gale'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(actions.completarTodos, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    })
  ),
  on(actions.borrarCompletados, (state) => state.filter((todo) => !todo.completado)),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
