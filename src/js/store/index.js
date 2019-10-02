//////////////////////////////
// src/js/store/index.js
//

import { createStore, applyMiddleware, compose }  from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import { apiSaga } from '../actions';

const sagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// FOR * THUNK *
// const store = createStore(rootReducer,
// 	storeEnhancers(applyMiddleware(thunk,))
// );

const store = createStore(rootReducer,
	storeEnhancers(applyMiddleware(sagaMiddleware,))
);

sagaMiddleware.run(apiSaga);

export default store;