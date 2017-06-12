import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer, //auth piece of state, is produced by the AuthReducer.
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
