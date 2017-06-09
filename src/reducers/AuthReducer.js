import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};
//default state so that the first time
//the reducer is called, it will not return undefined.

export default (state = INITIAL_STATE, action) => {
  //state = INITIAL_STATE is using the INITIAL_STATE in case the state is undefined.

  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
    {
        return { ...state, email: action.payload };
    }
        //the { is creating a new object, instead of just pointing to the arg state.
        // the ...state is initiating this new object with the values of the arg state.
        //the email: action.payload is canging the email value in this new object.
        //then redux will see the old state !== new state and will update all componenets.
    case PASSWORD_CHANGED:
    {
      return { ...state, password: action.payload };
    }
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        error: '',
        loading: false,
        password: '',
        email: ''
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: 'authentication failed',
        password: '',
        loading: false 
      };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
