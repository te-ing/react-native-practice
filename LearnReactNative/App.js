import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Box from './components/Box';
import {Counter} from './components/Counter';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView style={styles.full}>
      {/* <View>
        <Text>Hello World!</Text>
        <Greeting name="태중" />
        <Box size="large" />
      </View> */}
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // 위치한 영역 모두 차지
  },
});

export default App;
