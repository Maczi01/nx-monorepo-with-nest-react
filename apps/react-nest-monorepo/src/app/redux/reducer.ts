import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  EDIT_TODO_TITLE,
  FETCH_TODOS,
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
  todos: [
    {
      id: '1',
      title: 'Play a game',
      completed: false,
    },
    {
      id: '2',
      title: 'eat pizzza',
      completed: true,
    },
  ],
  error: '',
};

export const reducer = (state = defaultState, action: TodoActionTypes) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state };
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
