import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import {cartReducer} from './reducers/cart';

const reducers = combineReducers({cart: cartReducer});

export const store = createStore(reducers, applyMiddleware(thunk));

export type State = ReturnType<typeof reducers>;
