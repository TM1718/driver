import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d+$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 5 && text.length === 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      navigation.navigate('DrivingLicense', { otp: otpString });
    } else {
      Alert.alert('Incomplete OTP', 'Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
          />
        ))}
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
        color="#6200EE"
        disabled={otp.join('').length !== 6} // Disable button if OTP is not fully entered
      />
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
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  input: {
    width: '15%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default OTPScreen;
