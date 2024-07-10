import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      {/* Edit Photo Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDA90' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Edit Photo</Text>
      </TouchableOpacity>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Phone no" style={styles.input} />
      <TextInput placeholder="Gender" style={styles.input} />
      <TextInput placeholder="Date of Birth" style={styles.input} />

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDA90' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#5EDA90',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;