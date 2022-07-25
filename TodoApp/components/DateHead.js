import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattingDate = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <StatusBar backgroundColor={'#26a69a'} barStyle="default" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattingDate}</Text>
      </View>
    </>
    // <SafeAreaView style={{flex: 1}}> iOS
    //   <View style={{flex: 1, backgroundColor: 'blue'}} />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
