import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { AppActions } from './models/actions';
import { reducer } from './reducer';

export type AppState = ReturnType<typeof reducer>;
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<AppState, AppActions, {}, {}>(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
