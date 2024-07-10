import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mode</Text>
      <Text>Location</Text>

      {/* Accept Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDA90' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>

      {/* Reject Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDA90' }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Reject</Text>
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

export default ModeScreen;