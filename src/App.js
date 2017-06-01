import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componenetWillMount() {
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
    return (
    <Provider store={createStore(reducers)}>
      <View>
        <LoginForm />
      </View>
    </Provider>
  );
  }
}

export default App;
