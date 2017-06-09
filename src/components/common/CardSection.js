import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  //style={[styles.containerStyle, props.style]}:
    //[array of style]. the style most to the right, override the style to the left.
    //that allows us to pass to this componenet props.style,
    //and ovveride attributes defined in comtainerStyle
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
