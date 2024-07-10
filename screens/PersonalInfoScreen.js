import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, DatePickerIOS, DatePickerAndroid, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PersonalInfoScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to show date picker for Android
  const showDatePickerAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'spinner',
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDOB(selectedDate.toLocaleDateString());
      }
    } catch ({ code, message }) {
      console.warn('Error occurred:', message);
    }
  };

  // Function to handle date selection on both platforms
  const handleDatePress = () => {
    if (Platform.OS === 'android') {
      showDatePickerAndroid();
    } else {
      setShowDatePicker(true);
    }
    Keyboard.dismiss();
  };

  // Function to handle date change for iOS date picker
  const handleDateChange = (date) => {
    setShowDatePicker(false);
    setDOB(date.toLocaleDateString());
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!firstName.trim() || !lastName.trim() || !dob.trim()) {
      alert('Please fill in all fields.');
      return;
    }
  
    try {
      const userId = await AsyncStorage.getItem('userId');
  
      if (!userId) {
        alert('User ID not found. Please log in again.');
        return;
      }
  
      const response = await axios.post('http://localhost:9081/api/users/update-personal-info', {
        userId,
        firstName,
        lastName,
        dob,
      });
      
      if (response.status === 200) {
        // Proceed to the next screen or perform other actions here
        navigation.navigate('Main');
      } else {
        alert('Failed to save personal info.');
      }
    } catch (error) {
      console.error('Error saving personal info:', error);
      alert('An error occurred while saving personal info.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Info</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      {/* Date of Birth field */}
      <TextInput
        placeholder="Date of Birth"
        style={styles.input}
        value={dob}
        onFocus={handleDatePress}
        onChangeText={setDOB}
      />

      {/* Date picker for iOS */}
      {showDatePicker && Platform.OS === 'ios' && (
        <DatePickerIOS
          date={new Date()}
          onDateChange={handleDateChange}
          mode="date"
          maximumDate={new Date()} // Allow only past dates
        />
      )}

      {/* Submit button */}
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: '#5EDA90' }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: '#5EDA90',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalInfoScreen;