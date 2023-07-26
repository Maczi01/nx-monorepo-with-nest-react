import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  EDIT_TODO_TITLE,
  ERROR,
  SET,
  START,
  STOP,
  TodoActionTypes,
  TOGGLE_TODO_ITEM,
} from './actions';
import { Todo } from '@react-nest-monorepo/types';

interface TodoState {
  loading: boolean;
  todos: Todo[];
  error: string;
}

const defaultState: TodoState = {
  loading: false,
  todos: [],
  error: '',
};

export const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        todos: defaultState.todos,
        error: defaultState.error,
      };
    case SET:
      return {
        ...state,
        todos: action.payload,
      };
    case STOP:
      return {
        ...state,
        loading: defaultState.loading,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    case EDIT_TODO_TITLE:
      console.log('action.payload', action.payload);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, title: action.payload.title };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
