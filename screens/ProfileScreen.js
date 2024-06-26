// screens/ProfileScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Edit Photo" onPress={() => {}} />
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Phone no" style={styles.input} />
      <TextInput placeholder="Gender" style={styles.input} />
      <TextInput placeholder="Date of Birth" style={styles.input} />
      <Button title="Logout" onPress={() => {}} />
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
  input: {
    width: '80%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default ProfileScreen;
