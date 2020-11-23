import { combineReducers } from 'redux';
import userReducer from './user';
import tokenReducer from './token';

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
});
