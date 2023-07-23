import { Dispatch } from 'redux';

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  AppActions,
  ADD_TODO_REQUEST,
  ADD_TODO_ITEM,
  ADD_TODO_ITEMS,
  TOGGLE_TODO_ITEM,
} from './models/actions';
import { Todo } from './reducer';

// const requestTodos = (): AppActions => ({
//   type: FETCH_TODOS_REQUEST,
//   loading: true,
//   todos: [],
//   error: '',
// });
// const addTodo = (todo: Todo): AppActions => ({
//   type: ADD_TODO_REQUEST,
//   loading: true,
//   todos: [],
//   error: '',
// });
// const receiveTodos = (todos: Todo[]): AppActions => ({
//   type: FETCH_TODOS_SUCCESS,
//   loading: false,
//   todos: todos,
//   error: '',
// });
// const invalidateTodos = (): AppActions => ({
//   type: FETCH_TODOS_FAILURE,
//   loading: false,
//   todos: [],
//   error: 'Unable to fetch todo list',
// });

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO_ITEM,
    payload: todo,
  };
}

export function addTodos(todos: any) {
  return {
    type: ADD_TODO_ITEMS,
    todos: todos,
  };
}

export function toggleTodo(id: string) {
  return {
    type: TOGGLE_TODO_ITEM,
    id: id,
  };
}

// export const boundRequestTodos = () => {
//   return (dispatch: Dispatch<AppActions>) => {
//     dispatch(requestTodos());
//     return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
//       .then((res) => res.json())
//       .then((json) => dispatch(receiveTodos(json)));
//   };
// };
