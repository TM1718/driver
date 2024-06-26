import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

const VehicleSelectionScreen = ({ navigation }) => {
  const [selectedVehicles, setSelectedVehicles] = useState({
    truck: false,
    fourWheeler: false,
    twoWheeler: false,
    omniBuses: false,
  });

  const toggleCheckbox = (vehicle) => {
    setSelectedVehicles((prevState) => ({
      ...prevState,
      [vehicle]: !prevState[vehicle],
    }));
  };

  const handleSubmit = () => {
    const isAnyVehicleSelected = Object.values(selectedVehicles).some((isSelected) => isSelected);
    if (isAnyVehicleSelected) {
      navigation.navigate('Login');
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
          checkedColor="#6200EE"
          uncheckedColor="#6200EE"
        />
        <CheckBox
          title="Four Wheeler"
          checked={selectedVehicles.fourWheeler}
          onPress={() => toggleCheckbox('fourWheeler')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#6200EE"
          uncheckedColor="#6200EE"
        />
        <CheckBox
          title="Two Wheeler"
          checked={selectedVehicles.twoWheeler}
          onPress={() => toggleCheckbox('twoWheeler')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#6200EE"
          uncheckedColor="#6200EE"
        />
        <CheckBox
          title="Omni Buses"
          checked={selectedVehicles.omniBuses}
          onPress={() => toggleCheckbox('omniBuses')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedColor="#6200EE"
          uncheckedColor="#6200EE"
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
    backgroundColor: '#6200EE',
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
