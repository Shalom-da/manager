import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { Button, CardSection, Card, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <View style={{ paddingTop: 5 }}>
        <Card>
          <CardSection>
            <Input
              label={'Name'}
              placeholder={'your_name'}
              value={this.props.name}
              onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Phone'}
              placeholder={'054-0000000'}
              value={this.props.phone}
              onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
            />
          </CardSection>
          <CardSection style={{ flexDirection: 'column', height: 88 }}>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
            >
              <Picker.Item label="Sunday" value="Sunday" />
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
            </Picker>
          </CardSection>
          <CardSection>
            <Button>Create</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
