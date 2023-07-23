import {
  ADD_TODO_ITEM,
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
      console.log('ADD_TODO_ITEM', action);

      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case TOGGLE_TODO_ITEM:
      console.log('TOGGLE_TODO_ITEM', action);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

// export const reducer = (
//   state = defaultState,
//   action: TodoActionTypes,
// ): TodoState => {
//   switch (action.type) {
//     case FETCH_TODOS_REQUEST:
//       return { loading: true, todos: [], error: '' };
//     case FETCH_TODOS_SUCCESS:
//       return { loading: false, todos: action.todos, error: '' };
//     case FETCH_TODOS_FAILURE:
//       return { loading: false, todos: [], error: action.error };
//     default:
//       return state;
//   }
// };
