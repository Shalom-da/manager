import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with.
    // this.props is still the old set of props.
    //componentWillReceiveProps is used whenever you want to make change when
    // the component props are being changed.

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
  //  console.log('start create func: ', employees);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  //  console.log('end create func: ', this.datasource);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
  //  console.log(this.props);
    return (
      <ListView
        style={{ paddingTop: 10 }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
