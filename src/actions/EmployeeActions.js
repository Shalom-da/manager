import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  //gets the value of the current login user:
  const { currentUser } = firebase.auth();

  //the return is to satisfy redux-thunk. We do mot really need to do
  //anything afgter we added the employeee to firebase. So we "fake" the reduc thunk.
  //we do not really send an action. No dispatch. Just wrapping with return function.
  return (dispatch) => {
    //in firebase, get reference to '/users/uid/employees'. this is the firebase
    //data store JSON structure.
    //we use the ` ` and the ${var_name} as an ES6 trick to build the
    //string as above, with the current user id var.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //then we push the employee to this JSON location
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' }); // navigating back to employee list
      });
      //type: 'reset' is reseting the "stack" of the router. removes the back button.
  };

  //type: EMPLOYEE_CREATE,
  //payload: { name, phone, shift  }
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //each time there is a 'value' from this ref, call a fat arrow function, with 'snapshot'.
      //snapshot: object that descibes the employees. not an array or something.
      .on('value', snapshot => {
        //snapshot.val() - this val us the actual data.
        //firebase on. provides access to update this data, anytime there is a change in the data.
        //anytime there is a new data, firebase will automatically call this dispatch,
        //without us needing to do anything.
        //this will exist for the entire lifecycle of the application.
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
