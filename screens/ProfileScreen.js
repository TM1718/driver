import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Edit Photo Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDA90' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Edit Photo</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>John Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone no:</Text>
        <Text style={styles.info}>123-456-7890</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.info}>01/01/1990</Text>
      </View>

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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  infoContainer: {
    width: '80%',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
