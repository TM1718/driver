// screens/ModeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mode</Text>
      <Text>Location</Text>
      <Button title="Accept" onPress={() => {}} />
      <Button title="Reject" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default ModeScreen;
