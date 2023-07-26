import { Todo } from '@react-nest-monorepo/types';
import { getTodos } from '../api';
import { Dispatch } from 'redux';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const EDIT_TODO_TITLE = 'EDIT_TODO_TITLE';
export const START = 'START';
export const SET = 'SET';
export const STOP = 'STOP';
export const ERROR = 'ERROR';

interface FetchTodos {
  type: typeof FETCH_TODOS;
  loading: boolean;
  todos: Todo[];
  error: string;
}

interface AddTodoItem {
  type: typeof ADD_TODO_ITEM;
  payload: Todo;
}

interface ToggleTodoItem {
  type: typeof TOGGLE_TODO_ITEM;
  payload: { id: string };
}

interface DeleteTodoItem {
  type: typeof DELETE_TODO_ITEM;
  payload: { id: string };
}

interface EditTodoItem {
  type: typeof EDIT_TODO_TITLE;
  payload: Todo;
}

interface Start {
  type: typeof START;
}

interface Set {
  type: typeof SET;
  payload: Todo[];
}

interface Stop {
  type: typeof STOP;
}

interface Error {
  type: typeof ERROR;
  payload: { error: unknown };
}

export type TodoActionTypes =
  | Error
  | Stop
  | Set
  | Start
  | FetchTodos
  | ToggleTodoItem
  | AddTodoItem
  | DeleteTodoItem
  | EditTodoItem;

export const createAsyncActionGetUsers =
  // () => async (dispatch: Dispatch<Error | Stop | Set | Start | FetchTodos>) => {
  () => async (dispatch: any) => {
    dispatch({ type: START });
    try {
      const todos = await getTodos();
      // dispatch(createActionSet(users));
      dispatch({ type: SET, payload: todos });
    } catch (error) {
      // dispatch(createActionError(error));
      dispatch({ type: ERROR, payload: { error } });
    }
    // dispatch(createActionStop());
    dispatch({ type: STOP });
  };

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO_ITEM,
    payload: todo,
  };
}

// export const createActionStart = () => ({
//   type: START,
// });
// export const createActionSet = (payload: any) => ({
//   type: SET,
//   payload,
// });
// export const createActionStop = () => ({
//   type: STOP,
// });
// export const createActionError = (error: any) => ({
//   type: ERROR,
//   payload: { error },
// });

export const toggleTodo = (id: string) => {
  return {
    type: TOGGLE_TODO_ITEM,
    payload: {
      id,
    },
  };
};
export const editTodo = (todo: Todo) => {
  return {
    type: EDIT_TODO_TITLE,
    payload: todo,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO_ITEM,
    payload: {
      id,
    },
  };
};
