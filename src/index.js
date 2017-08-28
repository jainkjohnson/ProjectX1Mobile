import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// All redux reducers (rolled into one mega-reducer)
import { SimpleApp } from 'app/routes';
import rootReducer from 'app/redux/index';

const logger = (store) => (next) => (action) => {
  const result = next(action);

  console.log('next state', store.getState()); // eslint-disable-line no-console

  return result;
};

// Init redux store (using the given reducer & middleware)
const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      logger,
      thunkMiddleware,
    )
  )
);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <SimpleApp />
    </Provider>
  );
}
