import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, TouchableOpacity, DatePickerIOS, DatePickerAndroid } from 'react-native';

const PersonalInfoScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to show date picker for Android
  const showDatePickerAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: dob,
        mode: 'spinner',
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDOB(selectedDate);
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
  };

  // Function to handle date change for iOS date picker
  const handleDateChange = (date) => {
    setShowDatePicker(Platform.OS === 'ios');
    setDOB(date);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim() || !dob) {
      alert('Please fill in all fields.');
      return;
    }
    // Proceed to the next screen or perform other actions here
    navigation.navigate('Main');
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
      <TouchableOpacity style={styles.input} onPress={handleDatePress}>
        <Text>Date of Birth: {dob.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {/* Date picker for iOS */}
      {showDatePicker && Platform.OS === 'ios' && (
        <DatePickerIOS
          date={dob}
          onDateChange={handleDateChange}
          mode="date"
          maximumDate={new Date()} // Allow only past dates
        />
      )}

      <Button title="Submit" onPress={handleSubmit} />
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default PersonalInfoScreen;

