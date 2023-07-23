import { Todo } from '../reducer';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO_ITEMS = 'ADD_TODO_ITEMS';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';

interface TodoAsync {
  loading: boolean;
  todos: Todo[];
  payload: any;
  error: string;
}

interface FetchTodosRequest extends TodoAsync {
  type: typeof FETCH_TODOS_REQUEST;
}

interface FetchTodosSuccess extends TodoAsync {
  type: typeof FETCH_TODOS_SUCCESS;
}

interface FetchTodosFailure extends TodoAsync {
  type: typeof FETCH_TODOS_FAILURE;
}

interface AddTodoRequest extends TodoAsync {
  type: typeof ADD_TODO_REQUEST;
}

interface FetchTodos extends TodoAsync {
  type: typeof FETCH_TODOS;
}

interface AddTodoItems extends TodoAsync {
  type: typeof ADD_TODO_ITEMS;
}

interface AddTodoItem extends TodoAsync {
  type: typeof ADD_TODO_ITEM;
}

interface ToggleTodoItem extends TodoAsync {
  type: typeof TOGGLE_TODO_ITEM;
}

export type TodoActionTypes =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure
  | AddTodoRequest
  | FetchTodos
  | ToggleTodoItem
  | AddTodoItems
  | AddTodoItem;
export type AppActions = TodoActionTypes;
