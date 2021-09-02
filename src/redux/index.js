import { combineReducers } from 'redux';
import write from './modules/write';

let rootReducer = combineReducers({ write });

export default rootReducer;
