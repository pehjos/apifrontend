import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import cart from './book';
import order from './order';
import chart from './chart';
export const reducers = combineReducers({ posts, auth ,cart,chart,order});