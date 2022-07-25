import React from 'react';
import {StyleSheet, View} from 'react-native';

function Box({size}) {
  return <View style={[styles.box, styles.rounded, sizes[size]]} />;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    borderColor: 'coral',
    borderWidth: 5,
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
