import React, { Component } from 'react';
import Communications from 'react-native-communications';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Button, CardSection, Card, Confirm } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    //iterate over every property in the object this.props.employee,
    //and take every key value pair to the employeeUpdate reducer.
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    //shift: shift || 'Sunday'
      //in the shift is empty string, default to 'Sunday'.
  }

  onTextPress() {
    const { phone, name, shift } = this.props;
    Communications.text (phone, `Hi ${name}, your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      //{...this.props}: means to take all the props that were givven to EmployeeCreate,
      //and pass them to EmployeeForm.
      <View style={{ paddingTop: 5 }}>
        <Card>
          <EmployeeForm /*{...this.props}*/ />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)} >Save</Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)} >Text Schedule</Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Fire Employee
            </Button>
          </CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
