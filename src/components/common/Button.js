import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ children, onPress }) => {
  const { textStyle, buttonStyle, viewStyle } = styles;


  return (
    <View style={viewStyle}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>
        {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
  //  flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#424242',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: 'center',
    color: '#424242',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  viewStyle: {
    //flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  }
};

export { Button };
