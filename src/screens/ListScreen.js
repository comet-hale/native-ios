import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
    { name: 'Friend #10' },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }, index) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;