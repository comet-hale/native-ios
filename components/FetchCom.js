import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import Bananas from './Bananas.js';

export default class FetchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(res => res.json())
      .then(res => this.setState({
        isLoading: false,
        dataSource: res.movies,
      }))
      .catch(err => console.error('err', err));
  }
  
  render() {
    if (this.state.isLoading) {
      return(
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, padding: 100 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({ id }, index) => id}
        />
        <Bananas/>
      </View>
    );
  }
}
