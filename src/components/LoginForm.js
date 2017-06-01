import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
    //since we bind this componenet to the emailChanged action creator,
    //(using the connect function in the export statements)
    //we can access itg using this.props...
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
            secure
          />
        </CardSection>

      <CardSection>
        <Button >
          Login
        </Button>
      </CardSection>
      </Card>
    );
  }
}

//returnn the property that we car about from the state.
const mapStateToProps = state => {
  return {
    email: state.auth.email
    //this provides to the componenet access to this.props.email.
    //the email is created by the reducer.
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
