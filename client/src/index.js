
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import rootSaga from './sagas/rootSaga';
import reducer from './reducers/MainReducer';
import App from './components/app';

const sagaMiddleware = createSagaMiddleware();
// const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore, applyMiddleware(sagaMiddleware, logger))(MainReducer);
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
 );

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));