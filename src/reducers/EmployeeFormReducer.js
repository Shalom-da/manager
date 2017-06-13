import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    // action.payload === { prop: 'name', value: 'jane'}
    {
        return { ...state, [action.payload.prop]: action.payload.value };
        //the [] is not an array, but an ES6 "key interpulation".
        //the key would be interpulated in runtime
        //without ES6:
          //const newState = {};
          //newState[action.payload.prop] = action.payload.value
          //return { newState }
    }
    case EMPLOYEE_CREATE:
    {
      //want to reset the form (employee create componenet) after the firebase
      //added the employee to the list. So that when the user clicks "add" again,
      //the form is empty abd not containing the previoues added employee
      return INITIAL_STATE;
    }
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
    {
      return state;
    }
  }
};
