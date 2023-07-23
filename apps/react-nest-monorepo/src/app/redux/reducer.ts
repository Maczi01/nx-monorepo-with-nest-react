import {
  ADD_TODO_ITEM,
  ADD_TODO_ITEMS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TodoActionTypes,
  TOGGLE_TODO_ITEM,
} from './models/actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  loading: boolean;
  todos: Todo[];
  error: string;
}

const defaultState: TodoState = {
  loading: false,
  todos: [
    {
      id: 1,
      title: 'Play a game',
      completed: false,
    },
    {
      id: 2,
      title: 'eat pizzza',
      completed: true,
    },
  ],
  error: '',
};

export const reducer = (state = defaultState, action: TodoActionTypes) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state };
    case ADD_TODO_ITEMS:
      return { ...state, ...action.todos };
    case ADD_TODO_ITEM:
      // userId
      // id
      // title
      // completed
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
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
