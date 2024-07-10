import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const VehicleSelectionScreen = ({ navigation }) => {
  const [selectedVehicles, setSelectedVehicles] = useState({
    truck: false,
    fourWheeler: false,
    twoWheeler: false,
    omniBuses: false,
  });
  const [userId, setUserId] = useState(null); // State to hold user ID

  useEffect(() => {
    // Function to fetch user ID from AsyncStorage
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        if (id !== null) {
          setUserId(id);
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId(); // Invoke the function on component mount
  }, []);

  const toggleCheckbox = (vehicle) => {
    setSelectedVehicles((prevState) => ({
      ...prevState,
      [vehicle]: !prevState[vehicle],
    }));
  };

  const handleSubmit = async () => {
    if (!userId) {
      Alert.alert('Error', 'User ID not found');
      return;
    }

    const selectedVehicleList = Object.entries(selectedVehicles)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    if (selectedVehicleList.length > 0) {
      try {
        const response = await axios.post('http://localhost:9081/api/users/update-vehicles', {
          userId,
          selectedVehicles: selectedVehicleList,
        });
        console.log(response.data);
        navigation.navigate('DrivingLicense');
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to update selected vehicles');
      }
    } else {
      Alert.alert('Validation Error', 'At least one vehicle type must be selected.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the types of vehicles you can drive:</Text>
      <View style={styles.checkboxGroup}>
        <CheckBox
          title="Truck"
          checked={selectedVehicles.truck}
          onPress={() => toggleCheckbox('truck')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#5EDA90"
          uncheckedColor="#5EDA90"
        />
        <CheckBox
          title="Four Wheeler"
          checked={selectedVehicles.fourWheeler}
          onPress={() => toggleCheckbox('fourWheeler')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#5EDA90"
          uncheckedColor="#5EDA90"
        />
        <CheckBox
          title="Two Wheeler"
          checked={selectedVehicles.twoWheeler}
          onPress={() => toggleCheckbox('twoWheeler')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#5EDA90"
          uncheckedColor="#5EDA90"
        />
        <CheckBox
          title="Omni Buses"
          checked={selectedVehicles.omniBuses}
          onPress={() => toggleCheckbox('omniBuses')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#5EDA90"
          uncheckedColor="#5EDA90"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  checkboxGroup: {
    width: '100%',
    paddingHorizontal: 20,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: 8,
  },
  checkboxText: {
    fontSize: 18,
    color: '#333',
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
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleSelectionScreen;
