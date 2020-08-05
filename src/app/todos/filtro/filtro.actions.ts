import { createAction, props } from '@ngrx/store';

export type Filtro = 'Todos' | 'Completados' | 'Pendientes';

export const filtrar = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: Filtro }>()
);


