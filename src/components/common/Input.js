import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secure}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};


const styles = {
  inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 18,
      flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    flex: 1
  }
};

export { Input };
