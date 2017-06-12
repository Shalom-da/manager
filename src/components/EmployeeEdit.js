import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate } from '../actions';
import { Button, CardSection, Card } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  onButtonPress() {
    //const { name, phone, shift } = this.props;

    //this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
    //shift: shift || 'Sunday'
      //in the shift is empty string, default to 'Sunday'.
  }

  render() {
    return (
      //{...this.props}: means to take all the props that were givven to EmployeeCreate,
      //and pass them to EmployeeForm.
      <View style={{ paddingTop: 5 }}>
        <Card>
          <EmployeeForm /*{...this.props}*/ />
          <CardSection>
            <Button /*onPress={this.onButtonPress.bind(this)}*/>Save</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;
//   return { name, phone, shift };
// };

export default connect(null, {
  employeeUpdate,
})(EmployeeEdit);
