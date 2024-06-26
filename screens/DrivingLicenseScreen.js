import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const DrivingLicenseScreen = ({ navigation }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [dlNumber, setDLNumber] = useState('');

  const pickImage = (setImage) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  const handleSubmit = () => {
    // Proceed to the next screen (PersonalInfo) or perform other actions here
    navigation.navigate('PersonalInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload DL Images</Text>

      <TouchableOpacity style={styles.imageContainer} onPress={() => pickImage(setFrontImage)}>
        {frontImage ? (
          <Image source={{ uri: frontImage }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Upload Front</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageContainer} onPress={() => pickImage(setBackImage)}>
        {backImage ? (
          <Image source={{ uri: backImage }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Upload Back</Text>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Enter DL number"
        style={styles.input}
        value={dlNumber}
        onChangeText={(text) => setDLNumber(text)}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        color="#6200EE"
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
    fontSize: 24,
    marginBottom: 24,
    color: '#333',
  },
  imageContainer: {
    width: '80%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imagePlaceholder: {
    color: '#aaa',
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

export default DrivingLicenseScreen;
