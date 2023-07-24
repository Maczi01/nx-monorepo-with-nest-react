import { Todo } from '@react-nest-monorepo/types';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const EDIT_TODO_TITLE = 'EDIT_TODO_TITLE';

interface TodoAsync {
  loading: boolean;
  todos: Todo[];
  payload: any;
  error: string;
}

interface FetchTodos extends TodoAsync {
  type: typeof FETCH_TODOS;
}

interface AddTodoItem extends TodoAsync {
  type: typeof ADD_TODO_ITEM;
}

interface ToggleTodoItem extends TodoAsync {
  type: typeof TOGGLE_TODO_ITEM;
}

interface DeleteTodoItem extends TodoAsync {
  type: typeof DELETE_TODO_ITEM;
}

interface EditTodoItem extends TodoAsync {
  type: typeof EDIT_TODO_TITLE;
}

export type TodoActionTypes =
  | FetchTodos
  | ToggleTodoItem
  | AddTodoItem
  | DeleteTodoItem
  | EditTodoItem;

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO_ITEM,
    payload: todo,
  };
}

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
