import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer //auth piece of state, is produced by the AuthReducer.
});
