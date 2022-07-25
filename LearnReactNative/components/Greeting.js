import React from 'react';
import {Text, View} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}

export default Greeting;
