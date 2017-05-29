import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={Styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const Styles = {
  spinnerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
};
export { Spinner };
