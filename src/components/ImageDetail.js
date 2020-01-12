import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Image Detail {props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;