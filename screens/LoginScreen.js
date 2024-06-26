import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleProceed = () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert('Validation Error', 'Please provide both name and phone number.');
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      Alert.alert('Validation Error', 'Phone number should be exactly 10 digits.');
      return;
    }

    navigation.navigate('OTP');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Continue</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button title="Proceed" onPress={handleProceed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
