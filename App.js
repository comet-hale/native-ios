import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './components/Bananas.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start to start working on your app!</Text>
      <Bananas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
