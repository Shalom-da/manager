import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
    //since we bind this componenet to the emailChanged action creator,
    //(using the connect function in the export statements)
    //we can access it using this.props...
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      );
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Input
            label={'Email'}
            placeholder={'email@abc.com'}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            placeholder={'Password'}
            onChangeText={this.onPasswordChange.bind(this)}
            secure
            value={this.props.password}
          />
        </CardSection>

      <Text style={Styles.errorTextStyle}>
        {this.props.error}
      </Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const Styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

//returnn the property that we car about from the state.
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    //this provides to the componenet access to this.props.email.
    //the email is created by the reducer.
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

/*
the above can be distractured to the following:
const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};

*/

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
