import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
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
    default:
    {
      return state;
    }
  }
};
