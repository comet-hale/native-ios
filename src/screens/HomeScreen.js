import React from 'react';
import { Text, Button, View } from 'react-native';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';

// async function registerForPushNotficationsAsync() {
//   const { status: existingStatus } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   let finalStatus = existingStatus;
//   if (existingStatus !== 'granted') {
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     finalStatus = status;
//   }

//   if(finalStatus !== 'granted') {
//     return;
//   }

//   let token = await Notifications.getExpoPushTokenAsync();
//   console.error('token', token);
// }

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hi, there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to Lists"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text"
      />
    </View>
  );
};

export default HomeScreen;
