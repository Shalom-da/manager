import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//applyMiddleware is needed, because redux-thunkn is a middleware,
//and this include allows redux to work with redux-thunk
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyD6jFKukwfzlRS9BiFBUyb_I0wU3rB5I-U',
    authDomain: 'manager-3a29b.firebaseapp.com',
    databaseURL: 'https://manager-3a29b.firebaseio.com',
    projectId: 'manager-3a29b',
    storageBucket: 'manager-3a29b.appspot.com',
    messagingSenderId: '538964252948'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //the second arg (empty in this case) is for pasing initial state to the redux application
    //this is mainly used when doing serer side rendering.
    //the 3'rd argument is "store enhancer": adding more functionality to
    //the store, like we do here with redux-thunk.
    return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
  }
}

export default App;
