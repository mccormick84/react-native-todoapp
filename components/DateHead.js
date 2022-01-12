import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead() {
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>2022년 1월 12일</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
