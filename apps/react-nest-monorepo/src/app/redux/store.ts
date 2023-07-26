import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';
import { TodoActionTypes } from './actions';

export type AppState = ReturnType<typeof reducer>;

const composeEnhancers =
  typeof window !== 'undefined' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore<AppState, TodoActionTypes, any, any>(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export type RootState = ReturnType<typeof store.getState>;
