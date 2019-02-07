import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';

import { watchGnomes } from './sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGnomes);

export default store;
