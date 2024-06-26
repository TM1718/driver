// screens/JobsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const JobsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Jobs</Text>
      <Text>Details about jobs will be displayed here.</Text>
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

export default JobsScreen;
