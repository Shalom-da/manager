// import lib for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a componenet
const Header = (props) => {
const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};

const styles = {
  viewStyle: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative'
    //paddingTop: 15,
    //shadowColor: '#000',
    //shadowOffset: { width: 20, height: 20 },
    //shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the componenet avilable to other parts of the app
export { Header };
