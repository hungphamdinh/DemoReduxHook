import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../config/reducers/index';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  );
}

// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducer/rootReducer'
// export default function configureStore(initialState) {
//   const middleware = [thunk];
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middleware)));
//   return store;
// }
