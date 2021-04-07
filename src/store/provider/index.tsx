import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {combineReducers, compose, applyMiddleware, createStore, Store} from 'redux';

import * as reducers from '../reducers';
import {AppState} from "../types/types";

export const rootReducer = combineReducers(reducers);

declare global {
  /* eslint no-var: "off"*/
  var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
}

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<AppState> = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(/* write middleware here*/))
);

export const Provider: FC = ({children}) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);
