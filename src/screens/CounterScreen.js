import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increase', payload: 2 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrease', payload: 2 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default CounterScreen;
