import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {AppTodo} from './components/AppTodo';
import {DateHead} from './components/DateHead';
import {Empty} from './components/Empty';

const App = () => {
  const today = new Date();

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding', android: undefined})}
        style={styles.avoid}>
        <DateHead date={today} />
        <Empty />
        <AppTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});
