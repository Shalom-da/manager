import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
  //the return is the action: an object with a "type" property.
  //it can also have a payload property.
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCESS', payload: user });
        //the dispatch is called only after the request complete.
        //once its complete, we pass the action manually using the dispatch
      });
  };
};
